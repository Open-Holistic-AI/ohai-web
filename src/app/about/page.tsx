import type { Metadata } from "next";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "About",
	description:
		"Chennai-based sovereign-AI company, backed by IIT Madras and Intel. We build India's own models and deploy them end-to-end.",
	alternates: { canonical: "/about" },
};

const DIFFERENT = [
	{
		title: "We own our IP",
		desc: "Models built in-house — not foreign APIs resold.",
	},
	{
		title: "We run what we build",
		desc: "You get an outcome, not a project — we operate it.",
	},
	{
		title: "Sovereign by design",
		desc: "Your data stays on your infrastructure, under your control.",
	},
	{
		title: "Already proven",
		desc: "Live inside the Government of Tamil Nadu, at state scale.",
	},
];

const BACKERS = [
	{
		title: "IIT Madras",
		desc: "Our research base, with Prof. V. Kamakoti, Director, IIT Madras.",
	},
	{
		title: "Intel",
		desc: "Industrial-grade infrastructure to run sovereign AI at scale.",
	},
	{
		title: "IITM Pravartak",
		desc: "Innovation partner; signed with CEO Dr. M. J. Shankar Raman.",
	},
];

const FACTS = [
	{
		title: "Legal name",
		desc: "Open Holistic AI Solutions Private Limited.",
	},
	{
		title: "Headquarters",
		desc: "IIT Madras Research Park, Chennai, Tamil Nadu, India.",
	},
	{
		title: "Backed by",
		desc: "IIT Madras, Intel and IITM Pravartak.",
	},
	{
		title: "Products",
		desc: "OHM (healthcare), the OHAI Platform and the Government AI Layer.",
	},
	{
		title: "Compliance",
		desc: "DPDP Act 2023, HL7 FHIR R4, ABDM and NHA-aligned.",
	},
	{
		title: "Contact",
		desc: "info@openholisticai.in · info@ohm.doctor",
	},
];

export default function AboutPage() {
	return (
		<>
			<PageHero
				dark
				crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
				eyebrow="About us"
				title={
					<>
						We build India&apos;s own AI — and put it to work in{" "}
						<em>public service.</em>
					</>
				}
				lede="A Chennai-based sovereign-AI company, backed by IIT Madras and Intel, building India's own AI."
				actions={[
					{ label: "Talk to our team", href: "/contact", primary: true },
					{ label: "See what we've built", href: "/government" },
				]}
			/>

			{/* mission */}
			<section className="sec">
				<div className="shell">
					<div className="mission__grid reveal">
						<p className="mission__lead">
							Sovereign AI, in the service of every citizen.
						</p>
						<div className="mission__body">
							<p>
								The most important place for AI isn&apos;t a consumer app —
								it&apos;s public service.
							</p>
							<p>
								We build India&apos;s own AI and run it on infrastructure the
								nation controls.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* what makes us different */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">What makes us different</span>
						<h2 className="sec__title">
							A forward-deployed engineering company, not a licence vendor.
						</h2>
					</div>
					<FeatureGrid items={DIFFERENT} cols={2} />
				</div>
			</section>

			{/* backed by the best */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Backed by the best</span>
						<h2 className="sec__title">IIT Madras. Intel. IITM Pravartak.</h2>
					</div>
					<FeatureGrid items={BACKERS} />
				</div>
			</section>

			{/* proof in the field */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Proof in the field</span>
						<h2 className="sec__title">Results, at state scale.</h2>
					</div>
					<div className="stats reveal">
						<div className="stat stat--teal">
							<div className="stat__num">1.5 M+</div>
							<div className="stat__label">
								messages in the first month — Nalam AI
							</div>
						</div>
						<div className="stat stat--lav">
							<div className="stat__num">90 min</div>
							<div className="stat__label">
								saved per doctor, daily — Ambient Listening
							</div>
						</div>
						<div className="stat stat--paper">
							<div className="stat__num">100%</div>
							<div className="stat__label">of the DIPR process digitised</div>
						</div>
						<div className="stat">
							<div className="stat__num">22</div>
							<div className="stat__label">districts live across Tamil Nadu</div>
						</div>
					</div>
				</div>
			</section>

			{/* company facts */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Company facts</span>
						<h2 className="sec__title">The essentials, on the record.</h2>
					</div>
					<FeatureGrid items={FACTS} />
				</div>
			</section>

			<CtaBand
				title="Let's build the most responsive public services in India — together."
				text="Talk to our team about deploying sovereign AI in your government, hospital or institution."
			/>
		</>
	);
}
