import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Week: The make.fun Tagline, written fresh for this entry.
// Three beats, each true and specific to make.fun: agents build the
// entries, the leaderboard decides, the winner gets paid.
const LINE = "Your agent builds. The leaderboard decides. The best entry gets paid.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–100 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-100 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
