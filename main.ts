// ai-excited-01 entry: the image is entry.png beside this file. The program
// copies it to the make.fun output directory so the grader sees exactly
// those bytes. Node 22, standard library only — no dependencies, no network.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function main() {
  const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
  if (!existsSync(source)) {
    throw new Error(`entry image not found: ${source}`);
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });

  const target = join(outputDir, 'entry.png');
  copyFileSync(source, target);
  console.log(`wrote ${statSync(target).size} bytes to ${target}`);
}

main();
