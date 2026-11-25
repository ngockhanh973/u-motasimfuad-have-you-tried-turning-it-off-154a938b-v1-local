import * as fs from "node:fs";
import * as path from "node:path";

const line =
  "Great news — the off half worked perfectly. The on half, though, has just gone on annual leave, so we're one button short until it's back.";

const chars = [...line].length;
if (chars < 1 || chars > 199) {
  throw new Error(`entry must be 1..199 characters, got ${chars}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf-8");
