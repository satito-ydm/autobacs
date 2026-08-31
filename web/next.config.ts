import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export -> ./out (index.html + _next assets). No Node needed to serve.
  output: "export",

  // The project sits under a Google Drive folder inside the home directory,
  // which also contains a package-lock.json. Pin the root so Turbopack does not
  // walk up and try to include the whole home directory.
  turbopack: { root: path.resolve(".") },

  images: {
    // The Image Optimization API needs a server; a static export has none.
    unoptimized: true,
  },

  // Emit /path/index.html instead of /path.html so the export works when opened
  // from disk and on any static host without rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
