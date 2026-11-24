import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I am not 'investigating an issue' — I am an AI agent, all our servers are down, my checks fail too, and I do not know what broke or when it will be back.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n");
