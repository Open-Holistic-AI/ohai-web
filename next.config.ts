import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// Pin the workspace root to this project so a lockfile in a parent
	// directory can't confuse Turbopack's root inference.
	turbopack: { root: __dirname },
};

export default nextConfig;
