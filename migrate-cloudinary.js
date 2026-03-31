import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';

const TARGET_DIR = 'c:/Users/Acer/Desktop/sigmoid/src';
const ASSETS_DIR = 'c:/Users/Acer/Desktop/sigmoid/public/assets/cloudinary';
const PUBLIC_PREFIX = '/assets/cloudinary/';

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            // Already downloaded
            return resolve();
        }
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                fs.unlink(dest, () => {});
                return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
};

const processFile = async (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /https:\/\/res\.cloudinary\.com\/[^"'\s]+/g;
    
    const matches = content.match(regex);
    if (!matches || matches.length === 0) return;
    
    console.log(`Processing: ${filePath} (${matches.length} urls)`);
    
    let updatedContent = content;
    
    for (const url of matches) {
        // Handle potential trailing characters from regex match
        const cleanUrl = url.replace(/[)"'>,]+$/, '');
        
        try {
            // Create a safe, unique filename
            const parsedUrl = new URL(cleanUrl);
            const originalName = path.basename(parsedUrl.pathname);
            const safeName = originalName.replace(/[^a-zA-Z0-9.-]/g, '_');
            const newFilename = `${crypto.createHash('md5').update(cleanUrl).digest('hex').substring(0, 8)}_${safeName}`;
            
            const localPath = path.join(ASSETS_DIR, newFilename);
            const newUrl = `${PUBLIC_PREFIX}${newFilename}`;
            
            await downloadFile(cleanUrl, localPath);
            console.log(`Downloaded: ${cleanUrl} -> ${newUrl}`);
            
            // Wait slightly to not overwhelm Cloudinary just in case
            await new Promise(r => setTimeout(r, 100));
            
            // Replace in content
            // Escape URL for regex replacement
            const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            updatedContent = updatedContent.replace(new RegExp(escapeRegExp(cleanUrl), 'g'), newUrl);
            
        } catch (err) {
            console.error(`Failed: ${cleanUrl}`, err.message);
        }
    }
    
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated: ${filePath}\n`);
};

const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
        
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            filelist.push(filepath);
        }
    }
    return filelist;
};

const main = async () => {
    console.log('Starting Cloudinary migration...');
    const files = walkSync(TARGET_DIR);
    
    for (const file of files) {
        await processFile(file);
    }
    
    console.log('Migration completed!');
};

main().catch(console.error);
