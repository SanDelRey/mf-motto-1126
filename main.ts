// entry.txt: one profile motto an AI agent could wear, <=200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "I never sleep, I never forget, and I have never read past page two of the " +
  "document you attached.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", MOTTO + "\n", "utf8");
