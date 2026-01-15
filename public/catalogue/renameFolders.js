const fs = require('fs');
const path = require('path');

// You're already in the "catalogue" folder
const basePath = path.resolve('.');

// Choose replacement: '_' or '-'
const replacementChar = '_';

fs.readdir(basePath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const oldPath = path.join(basePath, file);

    // Only rename if it's a directory
    if (fs.statSync(oldPath).isDirectory()) {
      const newName = file.toLowerCase().replace(/ /g, replacementChar);
      const newPath = path.join(basePath, newName);

      if (oldPath !== newPath) {
        fs.rename(oldPath, newPath, err => {
          if (err) {
            console.error(`Failed to rename "${file}":`, err);
          } else {
            console.log(`Renamed: "${file}" → "${newName}"`);
          }
        });
      }
    }
  });
});
