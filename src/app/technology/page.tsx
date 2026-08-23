import type { Metadata } from "next";

import { MockStack } from "@/components/illustrations";
import Link from "next/link";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "Technology",
	description:
		"The Sovereign Stack — we own it end to end: the Indian-language datasets our models learn on, the models themselves, and the Intel-backed infrastructure they run on. Secure, on-prem and DPDP-compliant.",
	alternates: { canonical: "/technology" },
};

const LAYERS = [
	{
		title: "I · Dataset — Indic corpus",
		desc: "Trained and post-trained on Indian-language data — Tamil, English and code-mixed speech captured in real ward and field conditions, not a foreign benchmark.",
	},
	{
		title: "II · Model — built in-house",
		desc: "Post-trained language and vision-language models where the core IP is ours, not a resold foreign API. Two tiers: a high-quality complex model and a low-latency fast model.",
	},
	{
		title: "III · Silicon — Intel-backed",
		desc: "Industrial-grade infrastructure engineered with Intel to run reliably at government and hospital scale, day after day.",
	},
	{
		title: "IV · Outcome — secure & on-prem",
		desc: "The whole stack runs on your infrastructure. Nothing leaves your control — the AI is sovereign because every layer is.",
	},
];

const SOVEREIGNTY = [
	{
		title: "Runs on your infrastructure",
		desc: "Deployed on-prem or in a sovereign cloud you control — never a shared multi-tenant service outside your walls.",
	},
	{
		title: "Separation of concerns",
		desc: "The workspace holding sensitive data lives on your side. The AI engine sees only what a single request needs and stores no identifiers.",
	},
	{
		title: "Zero-retention AI layer",
		desc: "No transcripts, no patient IDs, nothing kept. The engine answers the request and forgets it.",
	},
	{
		title: "Auditable & compliant",
		desc: "A full audit trail across every request, and a posture built to be compliant with the DPDP Act, 2023.",
	},
];

const STANDARDS = [
	{
		title: "Health-data standards",
		desc: "HL7 FHIR R4, ABDM alignment and NHA terminology — so the stack speaks the language your health system already runs on.",
	},
	{
		title: "Clinical coding",
		desc: "ICD-10, SNOMED CT and LOINC coding built in, keeping records structured and interoperable.",
	},
	{
		title: "Clean REST APIs",
		desc: "Sits over your existing EMR, HMIS and department systems through clean REST APIs — no rip-and-replace.",
	},
	{
		title: "SDKs, CLI & fast rollout",
		desc: "SDKs for JavaScript/TypeScript, Node and React Native, plus a CLI — so teams go live in weeks, not years.",
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
				lede="We own the full stack — from the Indian-language data our models learn on, to the models themselves, to the infrastructure they run on. That's what makes the AI sovereign and keeps your data yours."
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
							Data, model, silicon and outcome — each layer owned outright,
							so there is no foreign API in the loop and no data leaving your
							control.
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
						<h2 className="sec__title">Your data never leaves your control.</h2>
					</div>
					<div className="mission__grid reveal">
						<p className="mission__lead">Your data never leaves your control.</p>
						<div className="mission__body">
							<p>
								The whole stack runs on your infrastructure — on-prem or in a
								sovereign cloud you administer. Nothing is shipped to a shared
								service somewhere else.
							</p>
							<p>
								We design around separation of concerns. The workspace that
								holds sensitive data lives entirely on your side. The AI engine
								sees only what a single request needs, and stores no
								identifiers along the way.
							</p>
							<p>
								The AI layer is zero-retention: no transcripts, no patient IDs,
								nothing kept once a request is answered. Every request is
								captured in a full audit trail, and the posture is built to be
								compliant with the DPDP Act, 2023.
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
							Open standards and clean APIs mean the stack fits your health and
							department systems as they are — and gets you live in weeks, not
							years.
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
								Telugu, Malayalam, Kannada, Marathi, Bengali, Gujarati, Punjabi,
								Odia, Assamese, Urdu and more.
							</p>
							<p>
								That includes code-mixed, real-world speech through background
								noise — the way citizens and health workers talk in a busy ward
								or a field visit, not the clean sentences of a demo.
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
									We host, monitor, support and keep improving the system — our
									engineers stay close to the deployment rather than handing you
									a manual.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Resilient by design</h3>
								<p>
									Graceful fallbacks, retries and health monitoring keep the
									service dependable under real government and hospital load.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>Backed by IIT Madras &amp; Intel</h3>
								<p>
									Research depth from IIT Madras and industrial-grade silicon
									from Intel stand behind every deployment.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>An outcome, delivered</h3>
								<p>
									You receive a working outcome for your citizens and clinicians
									— not a stack of components to integrate yourself.
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
				text="We'll walk your technical and security teams through the full stack, the data-flow guarantees and the compliance posture."
			/>
		</>
	);
}
