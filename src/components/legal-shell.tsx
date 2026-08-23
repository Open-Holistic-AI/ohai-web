import type { ReactNode } from "react";

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
		<div className="legalpage">
			<div className="legal__body shell">
				<span className="kicker">{eyebrow}</span>
				<h1 className="legal__title">{title}</h1>
				<p className="legal__meta">Last updated: {updated}</p>
				{children}
			</div>
		</div>
	);
}
