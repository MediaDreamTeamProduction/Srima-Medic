// GitHub Pages post-export step, run on `out/` after `GITHUB_PAGES=true next build`.
//
// 1. `next build` with output: "export" writes route-segment prefetch files as
//    `__next.<segment>/__PAGE__.txt`, while the client router requests
//    `__next.<segment>.__PAGE__.txt`. A static host can't rewrite between the two,
//    so copy every nested file to its dotted sibling name.
// 2. Static export drops the `/` → `/th` redirect in next.config.ts, so write a
//    root index.html that forwards to the Thai home page.
// 3. Add .nojekyll so Pages serves the `_next/` folder as-is.
import { copyFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = process.argv[2] ?? "out";
let copied = 0;

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? files(p) : [p];
  });
}

function flatten(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const f of files(p)) {
        copyFileSync(f, join(dir, `${name}.${relative(p, f).split(sep).join(".")}`));
        copied++;
      }
    } else {
      flatten(p);
    }
  }
}

flatten(OUT);

writeFileSync(
  join(OUT, "index.html"),
  `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="refresh" content="0; url=./th/">
<link rel="canonical" href="./th/">
<title>Srima-Medic</title>
</head>
<body><a href="./th/">Srima-Medic</a></body>
</html>
`,
);
writeFileSync(join(OUT, ".nojekyll"), "");

console.log(`github-pages-postexport: copied ${copied} segment files, wrote index.html and .nojekyll`);
