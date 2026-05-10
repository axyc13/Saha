import path from "node:path";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";

export async function GET() {
  const stylesheetPath = path.join(
    process.cwd(),
    "src",
    "app",
    "(frontend)",
    "globals.css",
  );

  const css = await readFile(stylesheetPath, "utf8");

  return new Response(css, {
    headers: {
      "cache-control": "no-store",
      "content-type": "text/css; charset=utf-8",
    },
  });
}
