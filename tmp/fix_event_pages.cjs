const fs = require('fs');
const path = require('path');

const eventPagesDir = path.join(__dirname, '../src/components/ui');

const files = fs.readdirSync(eventPagesDir).filter(f => f.endsWith('Page.jsx') || f === 'KimsGame.jsx');

files.forEach(file => {
  const filePath = path.join(eventPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add import Link if not exists
  if (!content.includes("import { Link } from 'react-router-dom';")) {
    content = content.replace("import React, { useState,", "import React, { useState,\nimport { Link } from 'react-router-dom';");
    if (!content.includes("import { Link }")) { // fallback
        content = "import { Link } from 'react-router-dom';\n" + content;
    }
  }

  // 2. Inject Back Button
  const backButtonHtml = `
      {/* Back Button */}
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[100]">
        <Link to="/events" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#f89b29]/20 hover:border-[#f89b29]/50 transition-all backdrop-blur-md group shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </Link>
      </div>
  `;
  
  const rootDivRegex = /(<div className="min-h-screen[^>]+>)/;
  if (!content.includes('to="/events"')) {
    content = content.replace(rootDivRegex, `$1\n${backButtonHtml}`);
  }

  // 3. Inject Ribbon
  const ribbonHtml = `
            {/* INJECTED RIBBON */}
            <div className="absolute -top-12 -left-8 md:-left-12 opacity-80 mix-blend-screen pointer-events-none z-0 transform -rotate-12 scale-75 md:scale-100">
               <img src="/certificate-ribbon.png" alt="Premium Ribbon" className="w-[180px] h-[180px] object-contain drop-shadow-[0_0_30px_rgba(248,155,41,0.6)]" />
            </div>
            {/* END RIBBON */}
  `;

  // Right after the Participation Certificate H3
  const certHeaderRegex = /(<h3[^>]+Participant[^>]+Certificate[^>]+>\s*Official.*?<\/h3>)/s;
  if (!content.includes('certificate-ribbon.png')) {
      content = content.replace(certHeaderRegex, `$1\n${ribbonHtml}`);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
