import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Falls dein Repo-Name nicht die Root-Domain ist, z.B. username.github.io/repo-name
  // basePath: "/BabyTracker-Website",
};

export default nextConfig;
