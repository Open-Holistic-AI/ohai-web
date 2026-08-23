"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { LogoMark } from "@/components/logo";

const LINKS = [
	{ label: "Government", href: "/government" },
	{ label: "Healthcare", href: "/healthcare" },
	{ label: "Platform", href: "/platform" },
	{ label: "Education", href: "/education" },
	{ label: "About", href: "/about" },
];

const Close = () => (
	<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
		<path
			d="M5 5l10 10M15 5L5 15"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
		/>
	</svg>
);

const ArrowMini = () => (
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

export function SiteHeader() {
	const [stuck, setStuck] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setStuck(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);

	// Close the menu on Escape.
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<header className={`site-header${stuck ? " is-stuck" : ""}`}>
			<div className="site-header__inner">
				<div className="site-header__pill">
					<Link className="brand" href="/" onClick={() => setOpen(false)}>
						<LogoMark className="brand__mark" />
						<span className="brand__name">
							Open&nbsp;Holistic&nbsp;AI<i>Sovereign&nbsp;AI</i>
						</span>
					</Link>

					<nav className="snav" aria-label="Main">
						{LINKS.map((l) => (
							<Link key={l.href} href={l.href} className="snav__link">
								{l.label}
							</Link>
						))}
					</nav>

					<div className="site-header__actions">
						<Link href="/contact" className="btn btn--dark">
							Talk to us
						</Link>
					</div>

					<button
						type="button"
						className="site-header__toggle"
						aria-label="Open menu"
						aria-expanded={open}
						onClick={() => setOpen(true)}
					>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>

			{/* mobile full-screen menu */}
			<div className={`mnav${open ? " is-open" : ""}`} aria-hidden={!open}>
				<div className="mnav__top">
					<Link className="brand" href="/" onClick={() => setOpen(false)}>
						<LogoMark className="brand__mark" />
						<span className="brand__name">Open&nbsp;Holistic&nbsp;AI</span>
					</Link>
					<button
						type="button"
						className="mnav__close"
						aria-label="Close menu"
						onClick={() => setOpen(false)}
					>
						<Close />
					</button>
				</div>

				<nav className="mnav__body" aria-label="Mobile">
					{LINKS.map((l) => (
						<Link
							key={l.href}
							href={l.href}
							className="mnav__link"
							onClick={() => setOpen(false)}
						>
							{l.label}
							<ArrowMini />
						</Link>
					))}
				</nav>

				<div className="mnav__foot">
					<Link
						href="/contact"
						className="btn btn--dark btn--block"
						onClick={() => setOpen(false)}
					>
						Talk to us
					</Link>
					<a href="mailto:info@openholisticai.in" className="mnav__email">
						info@openholisticai.in
					</a>
				</div>
			</div>
		</header>
	);
}
