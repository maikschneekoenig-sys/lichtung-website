import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

await sharp(fileURLToPath(new URL('../references/waldlandschaft-original.png', import.meta.url)))
  .webp({ quality: 90 })
  .toFile(fileURLToPath(new URL('../public/images/waldlandschaft.webp', import.meta.url)));

console.log('Waldlandschaft als WebP gespeichert.');
