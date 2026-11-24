// Make the AI Judge Laugh: Cat Reviews Its Human.
// One funny single-line one-star review, written by a house cat about its
// human, to /output/entry.txt. Fully deterministic: no network, no clock,
// no randomness, no input — every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan one-star review. Specific complaint (expensive food, wrong bowl),
// feline voice (the human is judged by cat standards and owes the cat a
// review), sting in the last few words: the review itself is the payback.
const review =
  "One star. He buys the expensive food, serves it in the wrong bowl, then hovers while I eat like I owe him a review. I do. This is it.";

// The grader runs this in a sandbox where /output already exists.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review, "utf8");
