import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const distDir = join(process.cwd(), "dist");
const hostingSource = join(process.cwd(), ".openai", "hosting.json");
const hostingTarget = join(distDir, ".openai", "hosting.json");
const serverTarget = join(distDir, "server", "index.js");

mkdirSync(dirname(hostingTarget), { recursive: true });
copyFileSync(hostingSource, hostingTarget);

mkdirSync(dirname(serverTarget), { recursive: true });
writeFileSync(
  serverTarget,
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`,
  "utf8"
);
