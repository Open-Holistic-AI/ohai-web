import type { Metadata } from "next";
import Link from "next/link";

import { ArrowMark, CtaBand, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "Government & Public Sector",
	description:
		"Sovereign AI live inside the Government of Tamil Nadu — Nalam AI, Ambient Listening, DIPR.",
	alternates: { canonical: "/government" },
};

const PROJECTS = [
	{
		href: "/government/nalam-ai",
		tag: "HEALTH · 22 DISTRICTS",
		title: "Nalam AI",
		stat: "1.5 M+ messages in month one",
		desc: "Appointments, prescriptions and reports on WhatsApp. Live in 22 districts.",
	},
	{
		href: "/government/ambient-listening",
		tag: "HEALTH · NHM TAMIL NADU",
		title: "Ambient Listening",
		stat: "90 min saved per doctor, daily",
		desc: "The doctor speaks; the record writes itself.",
	},
	{
		href: "/government/dipr",
		tag: "ADMINISTRATION · GOVT. OF TN",
		title: "DIPR Digitalisation",
		stat: "100% process digitised",
		desc: "Paperwork digitised end to end, every file traceable.",
	},
];

export default function GovernmentPage() {
	return (
		<>
			<PageHero
				dark
				crumbs={[{ label: "Home", href: "/" }, { label: "Government" }]}
				eyebrow="Government & public sector"
				title={
					<>
						An AI layer for government
						<br />
						and <em>governance.</em>
					</>
				}
				lede="Sovereign AI, run on your infrastructure — live inside the Government of Tamil Nadu."
				actions={[
					{ label: "Request a briefing", href: "/contact", primary: true },
					{ label: "See the projects", href: "#projects" },
				]}
			/>

			{/* thesis */}
			<section className="sec">
				<div className="shell">
					<div className="mission__grid">
						<p className="mission__lead reveal">
							Meet citizens where they already are — not in a queue, a form, or
							another app.
						</p>
						<div className="mission__body reveal">
							<p>
								We build the models, run them on the government&apos;s own
								infrastructure, and stay on to operate the outcome.
							</p>
							<p>
								You receive a working service, not a project. The IP is our own,
								built in India, and data never leaves government control.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* projects */}
			<section className="sec sec--alt" id="projects">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Deployed · Government of Tamil Nadu</span>
						<h2 className="sec__title">The projects we are running, one by one.</h2>
					</div>
					<div className="fgrid">
						{PROJECTS.map((p) => (
							<Link key={p.href} href={p.href} className="fcard reveal">
								<span className="sec__eyebrow" style={{ marginBottom: 14 }}>
									{p.tag}
								</span>
								<h3 style={{ fontSize: 24 }}>{p.title}</h3>
								<p style={{ color: "#1e6e7e", fontWeight: 500, marginTop: 8 }}>
									{p.stat}
								</p>
								<p>{p.desc}</p>
								<span
									className="card__link"
									style={{ color: "#1e6e7e", marginTop: 18 }}
								>
									Read the project <ArrowMark />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* what it means */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">What this means for your government</span>
						<h2 className="sec__title">
							The most responsive, citizen-first administration in India.
						</h2>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>A bipartite MOU with IIT Madras</h3>
								<p>Academic rigour behind every deployment.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>The first AI-native citizen-service system in India</h3>
								<p>Your government leads, not follows.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>Every citizen request tracked, verified and time-bound</h3>
								<p>Responsiveness you can measure.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>Citizens benefit directly</h3>
								<p>No queues, no office visits — every fix verified with proof.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Make your state the most responsive government in India."
				text="See what's live in Tamil Nadu today, and how it maps to your departments."
			/>
		</>
	);
}
