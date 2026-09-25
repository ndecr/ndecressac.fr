import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const projectRoot = new URL("..", import.meta.url).pathname;
const sourceRoot = join(projectRoot, "src");
const forbiddenDirectories = [join(sourceRoot, "components"), join(sourceRoot, "layouts")];

async function collectFiles(directory) {
  const entries = await readdir(directory);
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry);
    const pathStat = await stat(path);
    if (pathStat.isDirectory()) {
      files.push(...(await collectFiles(path)));
    } else {
      files.push(path);
    }
  }

  return files;
}

for (const directory of forbiddenDirectories) {
  try {
    await stat(directory);
    throw new Error(`Forbidden directory: ${relative(projectRoot, directory)}`);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Forbidden")) {
      throw error;
    }
  }
}

const sourceFiles = await collectFiles(sourceRoot);
const typeScriptFiles = sourceFiles.filter((file) => /\.tsx?$/.test(file));
const scssFiles = sourceFiles.filter((file) => file.endsWith(".scss"));

for (const file of typeScriptFiles) {
  const content = await readFile(file, "utf8");
  if (/\bany\b/.test(content)) {
    throw new Error(`Forbidden TypeScript any: ${relative(projectRoot, file)}`);
  }
}

for (const file of scssFiles) {
  const content = await readFile(file, "utf8");
  if (/^\s*&/m.test(content)) {
    throw new Error(`Forbidden SCSS ampersand nesting: ${relative(projectRoot, file)}`);
  }
}

console.log("Architecture checks passed.");
