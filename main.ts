// ai-excited-01 — "Stone That Learned to Fly"
//
// The finished entry image (entry.png) lives next to this file. This
// program's only job is to deliver an exact copy of it to the grader at
// <output directory>/entry.png.
//
// The grader runs with MAKEFUN_OUTPUT_DIR set to /output. Locally, point
// it anywhere else, for example:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22. Standard library only — no dependencies, no network, no keys,
// no configuration other than the output directory.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY_NAME = 'entry.png';

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoDir, ENTRY_NAME);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const imageBytes = readFileSync(sourcePath);
const targetPath = join(outputDir, ENTRY_NAME);
writeFileSync(targetPath, imageBytes);

console.log(`wrote ${imageBytes.length} bytes to ${targetPath}`);
