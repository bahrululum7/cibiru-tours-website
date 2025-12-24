const fs = require('fs');
const path = require('path');

// Folder utama tempat foto berada
const galleryPath = path.join(__dirname, 'public/img');

// Output file JSON
const outputPath = path.join(__dirname, 'public/photos.json');

function walkGallery(basePath) {
  const data = {};

  const categories = fs.readdirSync(basePath, { withFileTypes: true }).filter((dirent) => dirent.isDirectory());

  categories.forEach((cat) => {
    const catPath = path.join(basePath, cat.name);
    const subfolders = fs.readdirSync(catPath, { withFileTypes: true }).filter((dirent) => dirent.isDirectory());

    subfolders.forEach((sub) => {
      const subPath = path.join(catPath, sub.name);
      const files = fs.readdirSync(subPath).filter((f) => /\.(jpe?g|png|gif)$/i.test(f));

      // key JSON: "category/subfolder"
      const key = `${cat.name}/${sub.name}`;
      data[key] = files;
    });
  });

  return data;
}

const photosJson = walkGallery(galleryPath);

// Tulis ke photos.json
fs.writeFileSync(outputPath, JSON.stringify(photosJson, null, 2));
console.log('✅ photos.json berhasil digenerate!');
