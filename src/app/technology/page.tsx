import type { Metadata } from "next";

import { MockStack } from "@/components/illustrations";
import Link from "next/link";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "Technology",
	description:
		"The Sovereign Stack: Indian-language datasets, our own models, and Intel-backed infrastructure. Secure, on-prem, DPDP-compliant.",
	alternates: { canonical: "/technology" },
};

const LAYERS = [
	{
		title: "I · Dataset — Indic corpus",
		desc: "Trained on Tamil, English and code-mixed Indian-language speech.",
	},
	{
		title: "II · Model — built in-house",
		desc: "Post-trained models we own — complex and fast tiers.",
	},
	{
		title: "III · Silicon — Intel-backed",
		desc: "Industrial-grade infrastructure engineered with Intel for government scale.",
	},
	{
		title: "IV · Outcome — secure & on-prem",
		desc: "Runs entirely on your infrastructure — nothing leaves your control.",
	},
];

const SOVEREIGNTY = [
	{
		title: "Runs on your infrastructure",
		desc: "Deployed on-prem or in a sovereign cloud you control.",
	},
	{
		title: "Separation of concerns",
		desc: "Sensitive data stays your side; the engine stores no identifiers.",
	},
	{
		title: "Zero-retention AI layer",
		desc: "No transcripts, no patient IDs — nothing kept.",
	},
	{
		title: "Auditable & compliant",
		desc: "Full audit trail, built for DPDP Act, 2023 compliance.",
	},
];

const STANDARDS = [
	{
		title: "Health-data standards",
		desc: "HL7 FHIR R4, ABDM alignment and NHA terminology.",
	},
	{
		title: "Clinical coding",
		desc: "ICD-10, SNOMED CT and LOINC coding built in.",
	},
	{
		title: "Clean REST APIs",
		desc: "Sits over your EMR and HMIS through clean REST APIs.",
	},
	{
		title: "SDKs, CLI & fast rollout",
		desc: "SDKs for JavaScript/TypeScript, Node and React Native, plus a CLI.",
	},
];

export default function TechnologyPage() {
	return (
		<>
			<PageHero
				dark
				crumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
				eyebrow="Technology"
				title={
					<>
						Dataset. Model. Silicon. <em>Sovereignty.</em>
					</>
				}
				lede="We own the full stack — data, models and infrastructure — so the AI is sovereign."
				actions={[
					{
						label: "Request a technical briefing",
						href: "/contact",
						primary: true,
					},
					{ label: "See it deployed", href: "/government" },
				]}
			/>

			{/* the four layers */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">The Sovereign Stack</span>
						<h2 className="sec__title">The four layers.</h2>
						<p className="sec__intro">
							Data, model, silicon and outcome — each owned outright, no
							foreign API in the loop.
						</p>
					</div>
					<FeatureGrid items={LAYERS} />
				</div>
			</section>

			{/* data sovereignty */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Data sovereignty</span>
						<h2 className="sec__title">Sovereignty by design.</h2>
					</div>
					<div className="mission__grid reveal">
						<p className="mission__lead">Your data never leaves your control.</p>
						<div className="mission__body">
							<p>
								The whole stack runs on your infrastructure — on-prem or a
								sovereign cloud you administer.
							</p>
							<p>
								We separate concerns: the AI engine sees only what a request
								needs and stores no identifiers.
							</p>
							<p>
								The AI layer is zero-retention and fully audited, built for
								DPDP Act, 2023 compliance.
							</p>
						</div>
					</div>
					<div style={{ marginTop: 44 }}>
						<FeatureGrid items={SOVEREIGNTY} cols={2} />
					</div>
				</div>
			</section>

			{/* standards & interoperability */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Standards &amp; interoperability</span>
						<h2 className="sec__title">
							Built to plug into what you already run.
						</h2>
						<p className="sec__intro">
							Open standards and clean APIs fit your existing systems — live in
							weeks, not years.
						</p>
					</div>
					<FeatureGrid items={STANDARDS} />
				</div>
			</section>

			{/* language-first */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="split">
						<div className="reveal">
							<span className="kicker">Language-first</span>
							<h2>Built for how India actually speaks.</h2>
							<p>
								The models handle 20+ Indian languages natively — Hindi, Tamil,
								Telugu, Malayalam and more.
							</p>
							<p>
								Including code-mixed, real-world speech through background noise
								— the way people actually talk.
							</p>
						</div>
						<div className="split__media split__media--mock reveal">
							<MockStack />
							<div className="split__badge">20+ Indian languages, natively</div>
						</div>
					</div>
				</div>
			</section>

			{/* run by us */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Run by us</span>
						<h2 className="sec__title">You get an outcome, not an integration project.</h2>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>Forward-deployed engineering</h3>
								<p>
									We host, monitor, support and keep improving the system —
									engineers close to every deployment.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Resilient by design</h3>
								<p>
									Graceful fallbacks, retries and health monitoring keep the
									service dependable under real load.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>Backed by IIT Madras &amp; Intel</h3>
								<p>
									Research depth from IIT Madras and industrial-grade silicon
									from Intel back every deployment.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>An outcome, delivered</h3>
								<p>
									You receive a working outcome — not components to integrate
									yourself.
								</p>
							</div>
						</div>
					</div>
					<p className="sec__intro" style={{ marginTop: 32 }}>
						Ready to go deeper? <Link href="/contact">Talk to our team</Link>{" "}
						about a deployment.
					</p>
				</div>
			</section>

			<CtaBand
				title="Want the architecture deep-dive?"
				text="We'll walk your technical and security teams through the full stack and compliance posture."
			/>
		</>
	);
}
