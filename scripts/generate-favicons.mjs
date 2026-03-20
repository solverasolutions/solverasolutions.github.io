/**
 * Builds square PNG favicons from public/favicon.png using fit: "contain"
 * (uniform scale; letterboxing uses white to match the square master asset).
 * Run: npm run favicons (also runs as prebuild).
 */
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "public", "favicon.png");

if (!existsSync(input)) {
  console.warn("generate-favicons: public/favicon.png missing, skip");
  process.exit(0);
}

const meta = await sharp(input).metadata();
const w = meta.width ?? 0;
const h = meta.height ?? 0;
console.log(
  `[favicons] Source favicon.png: ${w}×${h}px, aspect ${h ? (w / h).toFixed(4) : "?"}:1`,
);

async function writeSquare(name, size) {
  await sharp(input)
    .ensureAlpha()
    .resize(size, size, {
      fit: "contain",
      position: "centre",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 6 })
    .toFile(join(root, "public", name));
  const out = await sharp(join(root, "public", name)).metadata();
  console.log(
    `[favicons] Wrote ${name}: ${out.width}×${out.height}px (square; contain fit preserves logo aspect inside)`,
  );
}

await writeSquare("favicon-16.png", 16);
await writeSquare("favicon-32.png", 32);
await writeSquare("favicon-48.png", 48);
await writeSquare("apple-touch-icon.png", 180);

console.log("[favicons] Done. Tab icons from favicon.png; navbar/footer still use /logo.png.");
