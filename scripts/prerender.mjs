import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";

const projectRoot = new URL("..", import.meta.url).pathname;
const indexPath = resolve(projectRoot, "docs/index.html");
const viteServer = await createServer({
  appType: "custom",
  configFile: false,
  root: projectRoot,
  server: { hmr: false, middlewareMode: true, ws: false }
});

try {
  const { render } = await viteServer.ssrLoadModule("/src/entry-server.tsx");
  const applicationMarkup = (await render()).replaceAll(/<link rel="preload" as="image" href="[^"]+"\/>/g, "");
  const indexHtml = await readFile(indexPath, "utf8");
  const rootMarkup = `<div id="root">${applicationMarkup}</div>`;
  const rootStart = indexHtml.indexOf("<div id=\"root\">");
  const rootEnd = indexHtml.indexOf("\n  </body>", rootStart);

  if (rootStart === -1 || rootEnd === -1) {
    throw new Error("Expected an application root in the static HTML document.");
  }

  await writeFile(indexPath, `${indexHtml.slice(0, rootStart)}${rootMarkup}${indexHtml.slice(rootEnd)}`);
} finally {
  await viteServer.close();
}
