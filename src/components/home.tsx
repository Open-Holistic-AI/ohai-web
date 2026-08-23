import Link from "next/link";

const ArrowMark = () => (
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

const TEASERS = [
	{
		href: "/government",
		kicker: "Government",
		title: "An AI layer for governance",
		desc: "Nalam AI, Ambient Listening and DIPR — live inside the Government of Tamil Nadu across health and administration.",
	},
	{
		href: "/healthcare",
		kicker: "Healthcare · OHM",
		title: "Doctors treat, not type",
		desc: "OHM's ambient documentation and clinical intelligence — 90 minutes back per doctor, every day.",
	},
	{
		href: "/education",
		kicker: "Education",
		title: "Private AI for colleges",
		desc: "A cost-effective, on-prem alternative to ChatGPT and Claude — deployed and operated for your whole campus.",
	},
	{
		href: "/platform",
		kicker: "OHAI Platform",
		title: "Governed AI, everywhere",
		desc: "One AI workspace across web, terminal and desktop — managed models, admin controls, per-user usage.",
	},
];

export function Home() {
	return (
		<div className="ohai">
			{/* HERO */}
			<section className="hero" id="top">
				<div className="hero__bg" aria-hidden="true"></div>
				<div className="hero__veil" aria-hidden="true"></div>
				<div className="hero__content">
					<Link className="pill" href="/government/nalam-ai">
						<i className="pill__tag">NEW</i>
						Nalam&nbsp;AI — now live across 22 districts of Tamil&nbsp;Nadu
						<ArrowMark />
					</Link>
					<h1 className="headline">
						Sovereign AI, in service of
						<br />
						<em>every citizen.</em>
					</h1>
					<p className="lede">
						We build India&apos;s own AI models — then deploy, host and operate
						them end-to-end on your infrastructure. Not software you manage. An
						outcome we run for you.
					</p>
					<div className="cta">
						<Link href="/government" className="btn btn--dark btn--lg">
							See what we&apos;ve built
						</Link>
						<Link href="/contact" className="btn btn--glass btn--lg">
							Talk to our team
						</Link>
					</div>
				</div>
			</section>

			{/* PROOF — bento grid */}
			<section className="bento-wrap" id="government">
				<div className="shell">
					<p className="strip__label" style={{ marginBottom: 30 }}>
						Already serving the Government of Tamil Nadu — backed by IIT Madras
						&amp; Intel
					</p>
					<div className="bento">
						<article className="card card--hero reveal">
							<h2 className="card__title">
								Already serving the <em>Government of Tamil Nadu.</em>
							</h2>
							<Link className="card__link" href="/government">
								See the deployments
								<ArrowMark />
							</Link>
						</article>

						<article className="card card--wide card--image reveal">
							<div className="card__stat">1.5&nbsp;M+</div>
							<p className="card__sub">
								Messages handled on WhatsApp in the first month — Nalam AI,
								hospital appointments, prescriptions and reports without a queue.
							</p>
						</article>

						<article className="card card--teal reveal">
							<div className="card__stat">100%</div>
							<p className="card__sub">
								Of the process digitised, end to end — DIPR, Government of Tamil
								Nadu, with every file traceable from open to close.
							</p>
						</article>

						<article className="card card--ink reveal">
							<div className="card__stat">90&nbsp;min</div>
							<p className="card__sub">
								Saved per doctor, every day — Ambient Listening writes the
								clinical record while the doctor treats.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* WHAT WE DO — teasers to subpages */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Where we work</span>
						<h2 className="sec__title">
							One AI layer. Explore what it does, sector by sector.
						</h2>
						<p className="sec__intro">
							We are a forward-deployed engineering company for the public
							sector: we build the models, run them on your infrastructure, and
							stay on to operate the outcome. Dive into each area below.
						</p>
					</div>
					<div className="fgrid fgrid--2">
						{TEASERS.map((t) => (
							<Link key={t.href} href={t.href} className="fcard reveal">
								<span className="sec__eyebrow" style={{ marginBottom: 12 }}>
									{t.kicker}
								</span>
								<h3 style={{ fontSize: 22 }}>{t.title}</h3>
								<p>{t.desc}</p>
								<span
									className="card__link"
									style={{ color: "#1e6e7e", marginTop: 18 }}
								>
									Learn more <ArrowMark />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* PARTNERS — shaded institutional flow */}
			<section className="partners" id="partners">
				<div className="shell">
					<div className="partners__panel">
						<div className="partners__aura" aria-hidden="true"></div>
						<p className="partners__label">
							In partnership with governments &amp; institutions
						</p>
						<div className="partners__logos">
							{[
								{ src: "/media/logos/tn.png", name: "Government of Tamil Nadu" },
								{ src: "/media/logos/nhm.jpg", name: "National Health Mission" },
								{ src: "/media/logos/dipr.jpg", name: "DIPR · Govt. of TN" },
								{ src: "/media/logos/iitm.png", name: "IIT Madras" },
								{ src: "/media/logos/pravartak.png", name: "IITM Pravartak" },
							].map((l) => (
								/* eslint-disable-next-line @next/next/no-img-element */
								<figure className="plogo" key={l.name}>
									<img src={l.src} alt={l.name} loading="lazy" />
									<figcaption>{l.name}</figcaption>
								</figure>
							))}
						</div>
						<p className="partners__note">
							Backed by IIT Madras &amp; Intel · trademarks are the property of
							their respective owners.
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="ctaband">
				<div className="shell">
					<div className="ctaband__inner reveal">
						<h2>Bring sovereign AI to your organisation.</h2>
						<p>
							We&apos;ll show you exactly what&apos;s already live in Tamil Nadu —
							and how the same sovereign AI layer maps to your department,
							hospital or campus.
						</p>
						<div className="cta">
							<Link href="/contact" className="btn btn--light btn--lg">
								Request a briefing
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
		</div>
	);
}
