import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "",
    allowedDevOrigins: ["192.168.1.71"],
    turbopack: {
        root: rootDir
    },
    images: {
        unoptimized: true
    }
};

export default nextConfig;