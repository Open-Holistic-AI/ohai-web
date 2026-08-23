import Link from "next/link";
import type { ReactNode } from "react";

export const ArrowMark = () => (
	<svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
		<path
			d="M3 11 11 3M4.5 3H11v6.5"
			stroke="currentColor"
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

/** Small reusable feature icon (ring + node), palette-matched. */
export const NodeIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<circle cx="12" cy="12" r="7.4" stroke="currentColor" strokeWidth="1.7" />
		<circle cx="12" cy="4.6" r="2.1" fill="currentColor" />
	</svg>
);

type Crumb = { label: string; href?: string };

export function PageHero({
	eyebrow,
	title,
	lede,
	crumbs,
	dark,
	actions,
}: {
	eyebrow?: string;
	title: ReactNode;
	lede?: ReactNode;
	crumbs?: Crumb[];
	dark?: boolean;
	actions?: { label: string; href: string; primary?: boolean }[];
}) {
	return (
		<section className={`phero${dark ? " phero--dark" : ""}`}>
			<div className="shell">
				<div className="phero__inner">
					{crumbs && (
						<div className="phero__crumb">
							{crumbs.map((c, i) => (
								<span key={c.label}>
									{i > 0 && <span aria-hidden="true">/&nbsp;</span>}
									{c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
									{i < crumbs.length - 1 && " "}
								</span>
							))}
						</div>
					)}
					{eyebrow && <span className="phero__eyebrow">{eyebrow}</span>}
					<h1 className="phero__title">{title}</h1>
					{lede && <p className="phero__lede">{lede}</p>}
					{actions && (
						<div className="cta">
							{actions.map((a) => (
								<Link
									key={a.href + a.label}
									href={a.href}
									className={`btn btn--lg ${
										a.primary
											? dark
												? "btn--light"
												: "btn--dark"
											: dark
												? "btn--glass"
												: "btn--outline"
									}`}
								>
									{a.label}
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export function CtaBand({
	title,
	text,
	primaryHref = "/contact",
	primaryLabel = "Request a briefing",
}: {
	title: string;
	text: string;
	primaryHref?: string;
	primaryLabel?: string;
}) {
	return (
		<section className="ctaband">
			<div className="shell">
				<div className="ctaband__inner reveal">
					<h2>{title}</h2>
					<p>{text}</p>
					<div className="cta">
						<Link href={primaryHref} className="btn btn--light btn--lg">
							{primaryLabel}
						</Link>
						<a
							href="mailto:info@openholisticai.in"
							className="btn btn--glass btn--lg"
						>
							info@openholisticai.in
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

/** Feature card grid from a simple data array. */
export function FeatureGrid({
	items,
	cols = 3,
}: {
	items: { title: string; desc: string }[];
	cols?: 2 | 3;
}) {
	return (
		<div className={`fgrid${cols === 2 ? " fgrid--2" : ""}`}>
			{items.map((f) => (
				<div className="fcard reveal" key={f.title}>
					<span className="fcard__ico">
						<NodeIcon />
					</span>
					<h3>{f.title}</h3>
					<p>{f.desc}</p>
				</div>
			))}
		</div>
	);
}
