import { test, expect } from "@playwright/test";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public", "logo.png");

/** Read width/height from PNG IHDR (no extra deps). */
function pngDimensions(buffer) {
  if (buffer.length < 24) throw new Error("buffer too short");
  if (buffer.readUInt32BE(12) !== 0x49484452) {
    throw new Error("not a PNG IHDR at expected offset");
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

test.describe("Favicon / logo (HTTP + file)", () => {
  test("index HTML declares square favicon assets (not raw wide logo for tab)", async ({
    request,
  }) => {
    const res = await request.get("/");
    expect(res.ok()).toBeTruthy();
    const html = await res.text();
    expect(html).toMatch(/href="\/favicon-32\.png"/);
    expect(html).toMatch(/rel="icon"/);
  });

  test("GET /logo.png is unchanged full logo (wide aspect)", async ({ request }) => {
    const expected = readFileSync(logoPath);
    const res = await request.get("/logo.png");
    expect(res.ok(), await res.text()).toBeTruthy();
    const body = Buffer.from(await res.body());
    expect(body.equals(expected)).toBe(true);
    const { width, height } = pngDimensions(body);
    expect(width).toBeGreaterThan(height);
  });

  test("GET /favicon.png matches committed master (source for generator)", async ({ request }) => {
    const expected = readFileSync(join(root, "public", "favicon.png"));
    const res = await request.get("/favicon.png");
    expect(res.ok(), await res.text()).toBeTruthy();
    const body = Buffer.from(await res.body());
    expect(body.equals(expected)).toBe(true);
  });

  test("GET /favicon-32.png is square 32×32 (from favicon.png)", async ({
    request,
  }) => {
    const res = await request.get("/favicon-32.png");
    expect(res.ok(), await res.text()).toBeTruthy();
    const body = Buffer.from(await res.body());
    const { width, height } = pngDimensions(body);
    expect(width).toBe(32);
    expect(height).toBe(32);
  });
});
