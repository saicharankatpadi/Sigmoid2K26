const fs = require('fs');
const path = require('path');

const eventPagesDir = path.join(__dirname, '../src/components/ui');

// Look for both the main EventPages and other related pages
const files = fs.readdirSync(eventPagesDir).filter(f => f.endsWith('Page.jsx') || f === 'KimsGame.jsx' || f.endsWith('event-page.jsx'));

// The strings to replace
const targetStr = '<div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[100]">';
const replacementStr = '<div className="absolute top-[100px] left-6 lg:left-10 z-[100]">';

files.forEach(file => {
  const filePath = path.join(eventPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(filePath, content);
    console.log(`Updated Back Button in ${file}`);
  }
});
