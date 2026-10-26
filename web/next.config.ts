import type { NextConfig } from "next";

/** GitHub Pages preview: a static export served from /Srima-Medic. Vercel and `next dev` keep the default server build. */
const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/Srima-Medic" : "";

const nextConfig: NextConfig = githubPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    }
  : {
      async redirects() {
        return [{ source: "/", destination: "/th", permanent: false }];
      },
    };

export default nextConfig;
