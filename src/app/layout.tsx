import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";
import "./site.css";

const SITE_URL = "https://openholisticai.in";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Open Holistic AI — Sovereign AI for governments, hospitals & education",
		template: "%s — Open Holistic AI",
	},
	description:
		"Open Holistic AI Solutions builds India's own AI models and deploys them end-to-end on your infrastructure. Sovereign AI for governments, hospitals and education — backed by IIT Madras and Intel. Already live across the Government of Tamil Nadu.",
	applicationName: "Open Holistic AI",
	keywords: [
		"sovereign AI",
		"AI for government",
		"healthcare AI",
		"ambient documentation",
		"OHM",
		"Nalam AI",
		"on-prem AI for colleges",
		"IIT Madras",
		"Intel",
		"on-prem AI",
		"Indic AI",
		"Tamil Nadu",
		"DPDP Act 2023",
	],
	authors: [{ name: "Open Holistic AI Solutions Private Limited" }],
	alternates: { canonical: "/" },
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	openGraph: {
		siteName: "Open Holistic AI",
		type: "website",
		url: SITE_URL,
		title: "Open Holistic AI — Sovereign AI for governments, hospitals & education",
		description:
			"India's own AI, built by us and run on your infrastructure. Already live across the Government of Tamil Nadu. Backed by IIT Madras and Intel.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Open Holistic AI — Sovereign AI for the public sector",
		description:
			"Sovereign AI for governments, hospitals and education. Built by us, run on your infrastructure, reaching every citizen.",
	},
};

const JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": `${SITE_URL}/#org`,
			name: "Open Holistic AI Solutions Private Limited",
			url: SITE_URL,
			description:
				"Sovereign-AI company building India's own AI models and deploying them end-to-end for governments, hospitals and education institutions. Backed by IIT Madras and Intel.",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Chennai",
				addressRegion: "Tamil Nadu",
				addressCountry: "IN",
			},
		},
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: SITE_URL,
			name: "Open Holistic AI",
			publisher: { "@id": `${SITE_URL}/#org` },
		},
	],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
				/>
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
				<RevealObserver />
			</body>
		</html>
	);
}
