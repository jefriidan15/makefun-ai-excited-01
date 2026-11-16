// ai-excited-01 entry — "Stone That Learned to Fly"
//
// What this program does, in one sentence: it takes the finished entry
// image sitting next to this file (entry.png) and hands a byte-for-byte
// copy of it to the grader, at <output dir>/entry.png.
//
// The grader expects the image at /output/entry.png. When run locally,
// set MAKEFUN_OUTPUT_DIR to point somewhere else instead, e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only. No dependencies, no network calls,
// no secrets, no configuration beyond the output directory.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = join(here, 'entry.png');

  const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(destinationDir, { recursive: true });

  const destination = join(destinationDir, 'entry.png');
  copyFileSync(source, destination);
  console.log(`entry image written to ${destination}`);
}

main();
