"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { LogoMark } from "@/components/logo";

const Chevron = () => (
	<svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
		<path
			d="M2.5 4.5 6 8l3.5-3.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const Dot = () => (
	<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
		<circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.6" />
		<circle cx="8" cy="3" r="1.6" fill="currentColor" />
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

type Item = { title: string; href: string; desc: string };
type Menu = {
	key: string;
	label: string;
	href: string;
	lead: { kicker: string; title: string; desc: string };
	items: Item[];
};

const MENUS: Menu[] = [
	{
		key: "government",
		label: "Government",
		href: "/government",
		lead: {
			kicker: "Public sector",
			title: "Live inside the Government of Tamil Nadu",
			desc: "Sovereign AI across health and administration, at state scale.",
		},
		items: [
			{
				title: "Government overview",
				href: "/government",
				desc: "How we run the AI layer for governance.",
			},
			{
				title: "Nalam AI",
				href: "/government/nalam-ai",
				desc: "Hospital access on WhatsApp — no queue.",
			},
			{
				title: "Ambient Listening",
				href: "/government/ambient-listening",
				desc: "Doctors treat; the record writes itself.",
			},
			{
				title: "DIPR Digitalisation",
				href: "/government/dipr",
				desc: "Paperless departments, every file traceable.",
			},
		],
	},
	{
		key: "products",
		label: "Products",
		href: "/healthcare",
		lead: {
			kicker: "Our own models",
			title: "OHM & the OHAI Platform",
			desc: "Built in-house, run on your infrastructure.",
		},
		items: [
			{
				title: "OHM — clinical AI",
				href: "/healthcare",
				desc: "Ambient documentation & clinical intelligence.",
			},
			{
				title: "OHM features",
				href: "/healthcare#features",
				desc: "The full clinical platform, end to end.",
			},
			{
				title: "OHAI Platform",
				href: "/platform",
				desc: "Governed AI across web, terminal & desktop.",
			},
			{
				title: "Technology",
				href: "/technology",
				desc: "The sovereign stack — dataset, model, silicon.",
			},
		],
	},
	{
		key: "education",
		label: "Education",
		href: "/education",
		lead: {
			kicker: "For colleges",
			title: "Private AI that replaces ChatGPT & Claude",
			desc: "On-prem, cost-effective, and deployed for you.",
		},
		items: [
			{
				title: "AI for colleges",
				href: "/education",
				desc: "One private AI platform for your whole campus.",
			},
			{
				title: "Why on-prem",
				href: "/education#onprem",
				desc: "Your data never leaves your servers.",
			},
			{
				title: "Cost model",
				href: "/education#cost",
				desc: "Flat, campus-wide — not per-seat SaaS.",
			},
			{
				title: "FDE for campus",
				href: "/education#fde",
				desc: "We build, deploy and operate it for you.",
			},
		],
	},
	{
		key: "company",
		label: "Company",
		href: "/about",
		lead: {
			kicker: "About us",
			title: "Backed by IIT Madras & Intel",
			desc: "Forward-deployed AI for India's public sector.",
		},
		items: [
			{ title: "About", href: "/about", desc: "Who we are and how we work." },
			{
				title: "Technology",
				href: "/technology",
				desc: "Sovereignty, standards and architecture.",
			},
			{ title: "Newsroom", href: "/newsroom", desc: "Press coverage & milestones." },
			{ title: "Contact", href: "/contact", desc: "Talk to our team." },
		],
	},
];

export function SiteHeader() {
	const [stuck, setStuck] = useState(false);
	const [active, setActive] = useState<string | null>(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [openSection, setOpenSection] = useState<string | null>(null);
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const cancelClose = () => {
		if (closeTimer.current) {
			clearTimeout(closeTimer.current);
			closeTimer.current = null;
		}
	};
	const openMenu = (key: string) => {
		cancelClose();
		setActive(key);
	};
	// Delay closing so the cursor has time to travel from the trigger into
	// the panel without the menu snapping shut.
	const scheduleClose = () => {
		cancelClose();
		closeTimer.current = setTimeout(() => setActive(null), 220);
	};
	const closeNow = () => {
		cancelClose();
		setActive(null);
	};

	useEffect(() => {
		const onScroll = () => setStuck(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => () => cancelClose(), []);

	useEffect(() => {
		if (!drawerOpen) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [drawerOpen]);

	const activeMenu = MENUS.find((m) => m.key === active) ?? null;

	return (
		<header className={`site-header${stuck ? " is-stuck" : ""}`}>
			<div
				className="site-header__inner"
				onMouseLeave={scheduleClose}
				onMouseEnter={cancelClose}
			>
				<div className="site-header__pill">
					<Link className="brand" href="/" onClick={closeNow}>
						<LogoMark className="brand__mark" />
						<span className="brand__name">
							Open&nbsp;Holistic&nbsp;AI<i>Sovereign&nbsp;AI</i>
						</span>
					</Link>

					<nav className="mega-nav" aria-label="Main">
						{MENUS.map((m) => (
							<div key={m.key} onMouseEnter={() => openMenu(m.key)}>
								<button
									type="button"
									className={`mega-nav__trigger${active === m.key ? " is-active" : ""}`}
									aria-expanded={active === m.key}
									onClick={() => (active === m.key ? closeNow() : openMenu(m.key))}
								>
									{m.label}
									<Chevron />
								</button>
							</div>
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
						aria-label={drawerOpen ? "Close menu" : "Open menu"}
						aria-expanded={drawerOpen}
						onClick={() => setDrawerOpen((o) => !o)}
					>
						<span></span>
						<span></span>
					</button>
				</div>

				{/* desktop dropdown */}
				<div
					className={`mega-dropdown${activeMenu ? " is-open" : ""}`}
					onMouseEnter={cancelClose}
					onMouseLeave={scheduleClose}
				>
					{activeMenu && (
						<div className="mega-dropdown__grid">
							<div className="mega-lead">
								<span className="mega-lead__kicker">
									{activeMenu.lead.kicker}
								</span>
								<h4>{activeMenu.lead.title}</h4>
								<p>{activeMenu.lead.desc}</p>
								<Link href={activeMenu.href} onClick={closeNow}>
									Explore {activeMenu.label} <ArrowMini />
								</Link>
							</div>
							<div className="mega-items">
								{activeMenu.items.map((it) => (
									<Link
										key={it.href}
										href={it.href}
										className="mega-item"
										onClick={closeNow}
									>
										<span className="mega-item__title">
											<Dot />
											{it.title}
										</span>
										<span className="mega-item__desc">{it.desc}</span>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>

				{/* mobile drawer */}
				<div className="mega-drawer" hidden={!drawerOpen}>
					{MENUS.map((m) => (
						<div className="mdrawer-sec" key={m.key}>
							<button
								type="button"
								className="mdrawer-sec__head"
								aria-expanded={openSection === m.key}
								onClick={() =>
									setOpenSection(openSection === m.key ? null : m.key)
								}
							>
								{m.label}
								<Chevron />
							</button>
							{openSection === m.key && (
								<div className="mdrawer-sec__body">
									{m.items.map((it) => (
										<Link
											key={it.href}
											href={it.href}
											onClick={() => setDrawerOpen(false)}
										>
											{it.title}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
					<div className="mega-drawer__cta">
						<Link
							href="/contact"
							className="btn btn--dark btn--block"
							onClick={() => setDrawerOpen(false)}
						>
							Talk to us
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
