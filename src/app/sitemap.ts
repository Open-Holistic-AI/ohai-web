import type { MetadataRoute } from "next";

const BASE = "https://openholisticai.in";

const ROUTES = [
	"",
	"/government",
	"/government/nalam-ai",
	"/government/ambient-listening",
	"/government/dipr",
	"/healthcare",
	"/platform",
	"/education",
	"/technology",
	"/about",
	"/newsroom",
	"/contact",
	"/privacy",
	"/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
	return ROUTES.map((path) => ({
		url: `${BASE}${path}`,
		changeFrequency: "weekly",
		priority: path === "" ? 1 : 0.7,
	}));
}
