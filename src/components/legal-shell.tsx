import type { ReactNode } from "react";

import { LogoMark } from "@/components/logo";

const BrandMark = () => <LogoMark className="brand__mark" />;

export function LegalShell({
	eyebrow,
	title,
	updated,
	children,
}: {
	eyebrow: string;
	title: string;
	updated: string;
	children: ReactNode;
}) {
	return (
		<div className="legal">
			<header className="legal__bar">
				<div className="shell">
					<a className="brand" href="/">
						<BrandMark />
						<span className="brand__name">
							Open&nbsp;Holistic&nbsp;AI<i>Sovereign&nbsp;AI</i>
						</span>
					</a>
					<a className="btn btn--outline" href="/">
						Back to home
					</a>
				</div>
			</header>

			<main className="legal__body shell">
				<span className="kicker">{eyebrow}</span>
				<h1 className="legal__title">{title}</h1>
				<p className="legal__meta">Last updated: {updated}</p>
				{children}
			</main>

			<footer className="legal__foot shell">
				<span>Open Holistic AI Solutions Pvt Ltd © 2026 · Chennai, India</span>
				<span className="footer__mono">Built in India · Run in India</span>
			</footer>
		</div>
	);
}
