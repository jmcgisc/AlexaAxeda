const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/uploads');
const outputDir = path.join(__dirname, 'public/opt');
const sizes = [480, 960, 1440];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log('📁 Carpeta /opt creada');
}

console.log('🔍 Buscando imágenes en:', inputDir);

fs.readdirSync(inputDir).forEach((file) => {
  console.log('🖼️ Procesando:', file);

  sizes.forEach((size) => {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const outputPath = path.join(outputDir, `${name}-${size}.webp`);

    sharp(inputPath)
      .resize(size)
      .webp({ quality: 70 })
      .toFile(outputPath)
      .then(() => console.log(`✅ ${outputPath}`))
      .catch((err) => console.error(`❌ Error en ${file}:`, err.message));
  });
});
