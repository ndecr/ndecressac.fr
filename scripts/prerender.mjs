import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";

const projectRoot = new URL("..", import.meta.url).pathname;
const indexPath = resolve(projectRoot, "docs/index.html");
const siteUrl = "https://ndecressac.fr";
const viteServer = await createServer({
  appType: "custom",
  configFile: false,
  root: projectRoot,
  server: { hmr: false, middlewareMode: true, ws: false }
});

try {
  const { render } = await viteServer.ssrLoadModule("/src/entry-server.tsx");
  const indexHtml = await readFile(indexPath, "utf8");
  const rootStart = indexHtml.indexOf("<div id=\"root\">");
  const rootEnd = indexHtml.indexOf("\n  </body>", rootStart);

  if (rootStart === -1 || rootEnd === -1) {
    throw new Error("Expected an application root in the static HTML document.");
  }

  const routes = [
    { pathname: "/", outputPath: indexPath, robots: "index, follow" },
    { pathname: "/mentions-legales/", outputPath: resolve(projectRoot, "docs/mentions-legales/index.html"), robots: "noindex, follow" },
    { pathname: "/cv/", outputPath: resolve(projectRoot, "docs/cv/index.html"), robots: "noindex, follow" }
  ];

  for (const route of routes) {
    const applicationMarkup = (await render(route.pathname)).replaceAll(/<link rel="preload" as="image" href="[^"]+"\/>/g, "");
    const rootMarkup = `<div id="root">${applicationMarkup}</div>`;
    const canonicalUrl = `${siteUrl}${route.pathname}`;
    const routeHtml = indexHtml
      .replace('content="index, follow"', `content="${route.robots}"`)
      .replace(`${siteUrl}/`, canonicalUrl);

    await mkdir(resolve(route.outputPath, ".."), { recursive: true });
    await writeFile(route.outputPath, `${routeHtml.slice(0, rootStart)}${rootMarkup}${routeHtml.slice(rootEnd)}`);
  }
} finally {
  await viteServer.close();
}
