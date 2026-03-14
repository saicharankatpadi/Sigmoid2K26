const fs = require('fs');
const path = require('path');

const eventPagesDir = path.join(__dirname, '../src/components/ui');

const files = fs.readdirSync(eventPagesDir).filter(f => f.endsWith('Page.jsx') || f === 'KimsGame.jsx' || f === 'MagazinePage.jsx' || f.endsWith('Page.jsx'));

files.forEach(file => {
  const filePath = path.join(eventPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');

  if (lines[0].startsWith('import React, { useState,') && lines[1] && lines[1].startsWith("import { Link } from 'react-router-dom'; ")) {
      // It's broken in exactly the way we know
      const remainder = lines[1].substring("import { Link } from 'react-router-dom'; ".length);
      lines[0] = lines[0] + ' ' + remainder;
      lines[1] = "import { Link } from 'react-router-dom';";
      
      fs.writeFileSync(filePath, lines.join('\n'));
      console.log(`Fixed ${file}`);
  }
});
