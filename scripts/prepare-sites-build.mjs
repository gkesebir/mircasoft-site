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
    const url = new URL(request.url);
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    if (request.method === "GET" && !url.pathname.startsWith("/assets/")) {
      const indexUrl = new URL("/index.html", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return assetResponse;
  }
};
`,
  "utf8"
);
