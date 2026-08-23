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

const LOGOS = [
	{ src: "/media/logos/tn.png", name: "Government of Tamil Nadu" },
	{ src: "/media/logos/nhm.jpg", name: "National Health Mission" },
	{ src: "/media/logos/dipr.jpg", name: "DIPR · Govt. of TN" },
	{ src: "/media/logos/iitm.png", name: "IIT Madras" },
	{ src: "/media/logos/pravartak.png", name: "IITM Pravartak" },
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
						India&apos;s own AI, run on your infrastructure. We build and operate
						the outcome — you don&apos;t manage software.
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

			{/* MARQUEE — slider */}
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
			<section className="mission">
				<div className="shell">
					<span className="kicker">Our thesis</span>
					<div className="mission__grid">
						<p className="mission__lead reveal">
							Meet citizens where they already are — not in a queue, a form, or
							another app.
						</p>
						<div className="mission__body reveal">
							<p>
								We&apos;re a forward-deployed AI company. We build the models, run
								them on your infrastructure, and operate the result — you get a
								service, not a project.
							</p>
							<p>
								The models are our own, built in India. Your data never leaves
								your control. Proven today across the Government of Tamil Nadu.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* BENTO — proof */}
			<section className="bento-wrap" id="government">
				<div className="shell">
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
								Messages on WhatsApp in month one — Nalam AI.
							</p>
						</article>

						<article className="card card--teal reveal">
							<div className="card__stat">100%</div>
							<p className="card__sub">
								The DIPR department process, digitised end to end.
							</p>
						</article>

						<article className="card card--ink reveal">
							<div className="card__stat">90&nbsp;min</div>
							<p className="card__sub">
								Saved per doctor, daily — Ambient Listening.
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
							<Link
								href="/government"
								className="card__link"
								style={{ color: "#1e6e7e", marginTop: 18 }}
							>
								Explore Government <ArrowMark />
							</Link>
						</div>
						<div className="principle__items">
							<div className="item reveal">
								<h3>Nalam AI — the hospital in your pocket</h3>
								<p>
									Appointments, prescriptions and reports on WhatsApp — no counter,
									no queue. Live in 22 districts.
								</p>
							</div>
							<div className="item reveal">
								<h3>DIPR — a template for any department</h3>
								<p>
									Department paperwork digitised end to end. Every file traceable,
									no paper trail left behind.
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
							<Link
								href="/healthcare"
								className="card__link"
								style={{ color: "#1e6e7e", marginTop: 18 }}
							>
								Explore OHM <ArrowMark />
							</Link>
						</div>
						<div className="principle__items">
							<div className="item reveal">
								<h3>Ambient documentation</h3>
								<p>
									The doctor speaks; OHM writes a structured record before the
									patient leaves — 20+ Indian languages.
								</p>
							</div>
							<div className="item reveal">
								<h3>Patient access &amp; clinical intelligence</h3>
								<p>
									Reports on WhatsApp, plus advisory guideline insights at the
									point of care. The doctor decides.
								</p>
							</div>
							<div className="item reveal">
								<h3>Run on hospital infrastructure</h3>
								<p>
									Patient data never leaves the hospital. Audited, HL7 FHIR R4,
									ABDM and DPDP compliant.
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
							<Link
								href="/platform"
								className="card__link"
								style={{ color: "#1e6e7e", marginTop: 18 }}
							>
								Explore the Platform <ArrowMark />
							</Link>
						</div>
						<div className="principle__items">
							<div className="item reveal">
								<h3>Governed AI, everywhere</h3>
								<p>
									One AI workspace across web, terminal and desktop. Sign in once.
								</p>
							</div>
							<div className="item reveal">
								<h3>Managed and measured</h3>
								<p>
									Curated models, per-user usage, one admin console — no
									subscription sprawl.
								</p>
							</div>
							<div className="item reveal">
								<h3>Sovereign by option</h3>
								<p>
									Deploy on your own infrastructure. Backed by IIT Madras and
									Intel.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* DARK BAND — sovereignty */}
			<section className="connect" id="sovereignty">
				<div className="shell">
					<div className="connect__inner reveal">
						<div>
							<span className="kicker kicker--light">Sovereignty</span>
							<h2 className="connect__title">
								Your data never leaves <em>your control.</em>
							</h2>
						</div>
						<p className="connect__copy">
							Dataset, model and silicon run on infrastructure you own. No citizen
							data retained, fully audited, DPDP compliant. Backed by IIT Madras
							and Intel.
						</p>
						<Link className="btn btn--light btn--lg" href="/technology">
							Our approach
						</Link>
					</div>
				</div>
			</section>

			{/* PARTNERS — real logos, shaded flow */}
			<section className="partners" id="partners">
				<div className="shell">
					<div className="partners__panel">
						<div className="partners__aura" aria-hidden="true"></div>
						<p className="partners__label">
							In partnership with governments &amp; institutions
						</p>
						<div className="partners__logos">
							{LOGOS.map((l) => (
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

			{/* JOIN — CTA */}
			<section className="join" id="contact">
				<div className="shell join__shell reveal">
					<h2 className="join__title">
						Bring sovereign AI to your <em>organisation.</em>
					</h2>
					<p className="join__copy">
						Government, hospital or campus — see what&apos;s live in Tamil Nadu,
						and how it maps to you.
					</p>
					<div className="cta">
						<Link href="/contact" className="btn btn--dark btn--lg">
							Request a briefing
						</Link>
						<a
							href="mailto:info@openholisticai.in"
							className="btn btn--outline btn--lg"
						>
							info@openholisticai.in
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
