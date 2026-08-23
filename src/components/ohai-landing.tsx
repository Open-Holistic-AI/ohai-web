"use client";

import { useEffect, useState } from "react";

import { LogoMark } from "@/components/logo";

const ArrowMark = () => (
	<svg viewBox="0 0 14 14" aria-hidden="true">
		<path
			d="M3 11 11 3M4.5 3H11v6.5"
			stroke="currentColor"
			strokeWidth="1.4"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const BrandMark = () => <LogoMark className="brand__mark" />;

export function OhaiLanding() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [stuck, setStuck] = useState(false);

	// Deepen nav shadow once scrolled past the hero top.
	useEffect(() => {
		const onScroll = () => setStuck(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Reveal sections on scroll.
	useEffect(() => {
		const revealable = document.querySelectorAll(
			".card, .item, .mission__lead, .mission__body, .connect__inner, .join__shell",
		);
		revealable.forEach((el) => el.classList.add("reveal"));
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						io.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
		);
		revealable.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);

	// Lock body scroll while the mobile drawer is open.
	useEffect(() => {
		if (!menuOpen) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [menuOpen]);

	return (
		<div className="ohai">
			{/* NAV */}
			<header className={`nav${stuck ? " is-stuck" : ""}`} id="nav">
				<div className="nav__pill">
					<a className="brand" href="#top">
						<BrandMark />
						<span className="brand__name">
							Open&nbsp;Holistic&nbsp;AI<i>Sovereign&nbsp;AI</i>
						</span>
					</a>

					<nav className="nav__links" aria-label="Main">
						<a href="#government">Government</a>
						<a href="#healthcare">Healthcare</a>
						<a href="#platform">Platform</a>
						<a href="#sovereignty">Technology</a>
						<a href="#about">About</a>
					</nav>

					<div className="nav__actions">
						<a href="#sovereignty" className="nav__ghost">
							Technology
						</a>
						<a href="#contact" className="btn btn--dark">
							Talk to us
						</a>
					</div>

					<button
						type="button"
						className="nav__toggle"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((o) => !o)}
					>
						<span></span>
						<span></span>
					</button>
				</div>

				<div className="nav__drawer" hidden={!menuOpen}>
					<a href="#government" onClick={() => setMenuOpen(false)}>
						Government
					</a>
					<a href="#healthcare" onClick={() => setMenuOpen(false)}>
						Healthcare
					</a>
					<a href="#platform" onClick={() => setMenuOpen(false)}>
						Platform
					</a>
					<a href="#sovereignty" onClick={() => setMenuOpen(false)}>
						Technology
					</a>
					<a href="#about" onClick={() => setMenuOpen(false)}>
						About
					</a>
					<a
						href="#contact"
						className="btn btn--dark btn--block"
						onClick={() => setMenuOpen(false)}
					>
						Talk to us
					</a>
				</div>
			</header>

			{/* HERO */}
			<section className="hero" id="top">
				<div className="hero__bg" aria-hidden="true"></div>
				<div className="hero__veil" aria-hidden="true"></div>

				<div className="hero__content">
					<a className="pill" href="#government">
						<i className="pill__tag">NEW</i>
						Nalam&nbsp;AI — now live across 22 districts of Tamil&nbsp;Nadu
						<ArrowMark />
					</a>

					<h1 className="headline">
						Sovereign AI, in service of
						<br />
						<em>every citizen.</em>
					</h1>

					<p className="lede">
						We build India&apos;s own AI models — then deploy, host and operate
						them end-to-end on your infrastructure. Not software you manage. An
						outcome we run for you, reaching every citizen.
					</p>

					<div className="cta">
						<a href="#government" className="btn btn--dark btn--lg">
							See what we&apos;ve built
						</a>
						<a href="#contact" className="btn btn--glass btn--lg">
							Talk to our team
						</a>
					</div>
				</div>
			</section>

			{/* MARQUEE */}
			<section className="strip">
				<p className="strip__label">
					Already serving the Government of Tamil Nadu — backed by IIT Madras
					&amp; Intel
				</p>
				<div
					className="marquee"
					aria-label="Health, Administration, Governance, Public Health, Citizen Services, Grievance Redressal"
				>
					<div className="marquee__track">
						<span>Health</span>
						<span>Administration</span>
						<span>Governance</span>
						<span>Public&nbsp;Health</span>
						<span>Citizen&nbsp;Services</span>
						<span>Grievance&nbsp;Redressal</span>
						<span aria-hidden="true">Health</span>
						<span aria-hidden="true">Administration</span>
						<span aria-hidden="true">Governance</span>
						<span aria-hidden="true">Public&nbsp;Health</span>
						<span aria-hidden="true">Citizen&nbsp;Services</span>
						<span aria-hidden="true">Grievance&nbsp;Redressal</span>
					</div>
				</div>
			</section>

			{/* THESIS */}
			<section className="mission" id="about">
				<div className="shell">
					<span className="kicker">Our thesis</span>
					<div className="mission__grid">
						<p className="mission__lead">
							Government services should meet citizens where they already are —
							not in a queue, not in a form, not in another app to download.
						</p>
						<div className="mission__body">
							<p>
								Most AI vendors ship a tool and hand you a manual. We do the
								opposite. Open Holistic AI is a forward-deployed engineering
								company for the public sector: we build the models, run them on
								your own infrastructure, integrate with the systems your teams
								already use, and stay on to operate and support the outcome.
							</p>
							<p>
								The intelligence is our own — post-trained language and
								vision-language models built in-house, not a foreign API resold
								with a markup. It runs on hardware you control, so your data
								never leaves your walls. And it is proven at government scale
								today, live inside the Government of Tamil Nadu across health,
								administration and education.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* BENTO — proof */}
			<section className="bento-wrap" id="government">
				<div className="shell">
					<div className="bento">
						<article className="card card--hero">
							<h2 className="card__title">
								Already serving the <em>Government of Tamil Nadu.</em>
							</h2>
							<a className="card__link" href="#healthcare">
								See the deployments
								<ArrowMark />
							</a>
						</article>

						<article className="card card--wide card--image">
							<div className="card__stat">1.5&nbsp;M+</div>
							<p className="card__sub">
								Messages handled on WhatsApp in the first month — Nalam AI,
								hospital appointments, prescriptions and reports without a queue.
							</p>
						</article>

						<article className="card card--teal">
							<div className="card__stat">100%</div>
							<p className="card__sub">
								Of the process digitised, end to end — DIPR, Government of Tamil
								Nadu, with every file traceable from open to close.
							</p>
						</article>

						<article className="card card--ink">
							<div className="card__stat">90&nbsp;min</div>
							<p className="card__sub">
								Saved per doctor, every day — Ambient Listening writes the
								clinical record while the doctor treats.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* PRINCIPLES — sectors */}
			<section className="principles">
				<div className="shell">
					<div className="principle">
						<div className="principle__head">
							<span className="principle__num">01</span>
							<h2>
								Public services, <em>reinvented</em>
							</h2>
							<p className="principle__meta">GOVERNMENT · TAMIL NADU</p>
						</div>
						<div className="principle__items">
							<div className="item">
								<h3>Nalam AI — the hospital in the patient&apos;s pocket</h3>
								<p>
									Appointments booked on WhatsApp with no counter, token or
									queue. Prescriptions and lab reports delivered to the phone.
									e-Visits without travelling, geo-fencing to the nearest
									facility, and e-Seva assistance for anyone without a smartphone
									— live across 22 districts.
								</p>
							</div>
							<div className="item">
								<h3>DIPR digitalisation — a template for any department</h3>
								<p>
									For the Department of Information and Public Relations,
									Government of Tamil Nadu, day-to-day paperwork is fully
									digitised, end to end. Every file is traceable from the moment
									it is raised to the moment it is closed — no parallel paper
									trail left behind.
								</p>
							</div>
						</div>
					</div>

					<div className="principle" id="healthcare">
						<div className="principle__head">
							<span className="principle__num">02</span>
							<h2>
								Doctors treat, <em>not type</em>
							</h2>
							<p className="principle__meta">HEALTHCARE · OHM</p>
						</div>
						<div className="principle__items">
							<div className="item">
								<h3>Ambient documentation</h3>
								<p>
									The doctor speaks naturally — in Tamil, English or code-mixed
									speech — and OHM writes a complete, structured medical record
									before the patient leaves the room. Accurate in crowded
									outpatient wards, through background noise and cross-talk, in
									20+ Indian languages.
								</p>
							</div>
							<div className="item">
								<h3>Patient access &amp; clinical intelligence</h3>
								<p>
									Appointments, prescriptions and reports reach the patient on
									WhatsApp. At the point of care, OHM surfaces guideline-aligned
									insights — red-flag detection, screening prompts, coding
									support — always advisory, always clinician-facing. The doctor
									stays the decider.
								</p>
							</div>
							<div className="item">
								<h3>Run on hospital infrastructure</h3>
								<p>
									Patient data never leaves the hospital. The AI layer stores no
									transcripts and no patient identifiers, and every action is
									audited. HL7 FHIR R4, ABDM-aligned and DPDP Act 2023 compliant.
								</p>
							</div>
						</div>
					</div>

					<div className="principle" id="platform">
						<div className="principle__head">
							<span className="principle__num">03</span>
							<h2>
								One platform, <em>everywhere</em>
							</h2>
							<p className="principle__meta">OHAI PLATFORM</p>
						</div>
						<div className="principle__items">
							<div className="item">
								<h3>Governed AI across web, terminal and desktop</h3>
								<p>
									The OHAI Platform gives your whole organisation one AI
									workspace — multi-model chat, live artifacts, documents and
									tools on the web; an agentic coding assistant in the terminal;
									and a native desktop app. Sign in once; the same models and
									history follow you everywhere.
								</p>
							</div>
							<div className="item">
								<h3>Managed, measured and under your control</h3>
								<p>
									A curated set of high-quality models with no key management for
									end users, clear per-user usage, and a dedicated admin console
									for managing users, models and limits — replacing a sprawl of
									individual AI subscriptions with one governed platform.
								</p>
							</div>
							<div className="item">
								<h3>Sovereign by option</h3>
								<p>
									Deployable on your own infrastructure so your data stays under
									your control — the same engineering foundation, backed by IIT
									Madras and Intel, that powers our government deployments.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* DARK BAND — sovereignty */}
			<section className="connect" id="sovereignty">
				<div className="shell">
					<div className="connect__inner">
						<div>
							<span className="kicker kicker--light">Sovereignty</span>
							<h2 className="connect__title">
								Your data never leaves <em>your control.</em>
							</h2>
						</div>
						<p className="connect__copy">
							The whole stack — dataset, model and silicon — runs on government or
							hospital infrastructure you own. The AI layer retains no citizen
							data, every action is audited, and the models are our own IP, built
							in India. Backed by IIT Madras and Intel. DPDP Act 2023 compliant.
						</p>
						<a className="btn btn--light btn--lg" href="#contact">
							Request a briefing
						</a>
					</div>
				</div>
			</section>

			{/* PARTNERS — government & institutions (shaded flow) */}
			<section className="partners" id="partners">
				<div className="shell">
					<div className="partners__panel">
						<div className="partners__aura" aria-hidden="true"></div>
						<p className="partners__label">
							In partnership with governments &amp; institutions
						</p>
						<div className="partners__grid">
							{[
								"Government of Tamil Nadu",
								"National Health Mission",
								"DIPR · Govt. of TN",
								"IIT Madras",
								"Intel",
								"IITM Pravartak",
							].map((name) => (
								<span className="logo-chip" key={name}>
									<svg viewBox="0 0 20 20" aria-hidden="true">
										<circle
											cx="10"
											cy="10"
											r="6.4"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.6"
										/>
										<circle cx="10" cy="4.6" r="1.9" fill="currentColor" />
									</svg>
									{name}
								</span>
							))}
						</div>
						<p className="partners__note">
							Emblems shown as wordmarks — official logos supplied under
							engagement.
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="join">
				<div className="shell join__shell">
					<h2 className="join__title">
						Bring sovereign AI to your <em>organisation.</em>
					</h2>
					<p className="join__copy">
						Whether you run a government department or a hospital, we&apos;ll show
						you exactly what&apos;s already live in Tamil Nadu — and how the same
						sovereign AI layer maps to you.
					</p>
					<div className="cta" id="contact">
						<a href="mailto:info@openholisticai.in" className="btn btn--dark btn--lg">
							Request a briefing
						</a>
						<a
							href="mailto:info@openholisticai.in"
							className="btn btn--outline btn--lg"
						>
							info@openholisticai.in
						</a>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="footer">
				<div className="shell footer__shell">
					<div className="footer__brand">
						<a className="brand" href="#top">
							<BrandMark />
							<span className="brand__name">
								Open&nbsp;Holistic&nbsp;AI<i>Sovereign&nbsp;AI</i>
							</span>
						</a>
						<p className="footer__tag">
							Sovereign AI — built by us, run on your
							<br />
							infrastructure, reaching every citizen.
						</p>
					</div>

					<nav className="footer__cols" aria-label="Footer">
						<div>
							<h4>Solutions</h4>
							<a href="#government">Government</a>
							<a href="#healthcare">Healthcare</a>
							<a href="#platform">Platform</a>
						</div>
						<div>
							<h4>Products</h4>
							<a href="#healthcare">OHM</a>
							<a href="#platform">OHAI Platform</a>
							<a href="https://ohm.doctor">ohm.doctor</a>
						</div>
						<div>
							<h4>Company</h4>
							<a href="#about">About</a>
							<a href="#sovereignty">Technology</a>
							<a href="#contact">Contact</a>
						</div>
						<div>
							<h4>Legal</h4>
							<a href="/privacy">Privacy Policy</a>
							<a href="/terms">Terms &amp; Conditions</a>
							<a href="/privacy#dpdp">DPDP Act 2023</a>
						</div>
						<div>
							<h4>Connect</h4>
							<a href="mailto:info@openholisticai.in">Email</a>
							<a href="https://ohm.doctor">OHM</a>
							<a href="https://app.openholisticai.in">OHAI</a>
						</div>
					</nav>
				</div>

				<div className="shell footer__base">
					<span>Open Holistic AI Solutions Pvt Ltd © 2026 · Chennai, India</span>
					<span className="footer__mono">Built in India · Run in India</span>
				</div>
			</footer>
		</div>
	);
}
