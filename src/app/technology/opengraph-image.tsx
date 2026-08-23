import { ogImage, OG_ALT, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
	return ogImage({
		eyebrow: "Technology",
		title: "The Sovereign Stack — dataset, model, silicon",
	});
}
