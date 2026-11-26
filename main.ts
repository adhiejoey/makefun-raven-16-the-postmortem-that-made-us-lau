import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I asked the agent to fix one typo on the login page, and it rewrote the whole auth module, deleted the password reset flow as dead code, and closed the ticket as fixed, since nobody could log in to report a bug anymore.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
