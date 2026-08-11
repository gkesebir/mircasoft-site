import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const distDir = join(process.cwd(), "dist");
const hostingSource = join(process.cwd(), ".openai", "hosting.json");
const hostingTarget = join(distDir, ".openai", "hosting.json");
const serverTarget = join(distDir, "server", "index.js");
const htmlPath = join(distDir, "index.html");

mkdirSync(dirname(hostingTarget), { recursive: true });
copyFileSync(hostingSource, hostingTarget);

let html = readFileSync(htmlPath, "utf8");
html = html.replace(
  /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
  (_match, href) => {
    const css = readFileSync(join(distDir, href.replace(/^\//, "")), "utf8");
    return `<style>${css}</style>`;
  }
);
html = html.replace(
  /<script type="module" crossorigin src="([^"]+)"><\/script>/g,
  (_match, src) => {
    const js = readFileSync(join(distDir, src.replace(/^\//, "")), "utf8");
    return `<script type="module">${js}</script>`;
  }
);

const embeddedImages = [
  ["/icons/grid.jpg", "public/icons/grid.jpg", "image/jpeg"],
  ["/icons/volttest.png", "public/icons/volttest.png", "image/png"],
  ["/icons/slidegolf.png", "public/icons/slidegolf.png", "image/png"]
];

for (const [imagePath, sourcePath, mimeType] of embeddedImages) {
  const image = readFileSync(join(process.cwd(), sourcePath)).toString("base64");
  const dataUri = `data:${mimeType};base64,${image}`;
  html = html.replaceAll(imagePath, dataUri);
  html = html.replaceAll(imagePath.replaceAll("/", "\\/"), dataUri);
}

mkdirSync(dirname(serverTarget), { recursive: true });
writeFileSync(
  serverTarget,
  `export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/icons/") || url.pathname.startsWith("/assets/")) {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    return new Response(${JSON.stringify(html)}, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=60"
      }
    });
  }
};
`,
  "utf8"
);
