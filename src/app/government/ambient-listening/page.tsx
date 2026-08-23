import type { Metadata } from "next";

import { MockWaveform } from "@/components/illustrations";
import Link from "next/link";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "Ambient Listening — the record writes itself",
	description:
		"The doctor speaks and the clinical record writes itself. Deployed with the National Health Mission, Tamil Nadu.",
	alternates: { canonical: "/government/ambient-listening" },
};

const FEATURES = [
	{
		title: "No typing during the consultation",
		desc: "The doctor talks to the patient, not a keyboard.",
	},
	{
		title: "Accurate in real ward conditions",
		desc: "Built for ward noise and Tamil/English code-mixing.",
	},
	{
		title: "20+ Indian languages",
		desc: "Consult in any of 20+ Indic languages; record returned in clinical English.",
	},
	{
		title: "A structured record, not a blob of text",
		desc: "Diagnoses, medications, allergies and vitals each in their own field.",
	},
	{
		title: "The doctor always decides",
		desc: "Every field is editable. Nothing is signed until reviewed.",
	},
	{
		title: "Built with the NHM, Tamil Nadu",
		desc: "Delivered with the National Health Mission, Tamil Nadu, under a signed MOU.",
	},
];

export default function AmbientListeningPage() {
	return (
		<>
			<PageHero
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Government", href: "/government" },
					{ label: "Ambient Listening" },
				]}
				eyebrow="Deployed · Health · National Health Mission, TN"
				title={
					<>
						Doctors treat.
						<br />
						The record <em>writes itself.</em>
					</>
				}
				lede="Running at Rajiv Gandhi Government General Hospital, Chennai — the doctor speaks and the record writes itself."
				actions={[
					{ label: "Talk to our team", href: "/contact", primary: true },
					{ label: "See more projects", href: "/government" },
				]}
			/>

			{/* headline stat + intro */}
			<section className="sec">
				<div className="shell">
					<div className="split">
						<div className="reveal">
							<span className="kicker">The result</span>
							<h2>90 minutes saved per doctor, every day.</h2>
							<p>
								No typing during the consultation, so the doctor&apos;s full
								attention stays on the patient — not on a keyboard.
							</p>
							<p>
								The record is complete by the time the patient leaves — roughly an
								hour and a half of a doctor&apos;s day handed back.
							</p>
						</div>
						<div className="split__media split__media--mock reveal">
							<MockWaveform />
							<div className="split__badge">Rajiv Gandhi GGH, Chennai</div>
						</div>
					</div>
				</div>
			</section>

			{/* features */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">What Ambient Listening does</span>
						<h2 className="sec__title">
							Documentation that keeps up with the ward.
						</h2>
					</div>
					<FeatureGrid items={FEATURES} />
				</div>
			</section>

			{/* how it works */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">How it works</span>
						<h2 className="sec__title">
							From spoken consultation to signed note.
						</h2>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>The doctor records the consultation</h3>
								<p>
									The clinician speaks with the patient naturally — no scripts, no
									keyboard between them.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Speech becomes a transcript</h3>
								<p>
									Transcribed across 20+ Indic languages, holding up against ward
									noise and Tamil/English code-mixing.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>The transcript becomes a structured note</h3>
								<p>
									Diagnoses, medications, allergies, investigations and vitals each
									land in their own field.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>The doctor reviews and signs</h3>
								<p>
									Every field is editable. The clinician checks and signs — before
									the patient leaves.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* powered by OHM */}
			<section className="sec sec--tight sec--alt">
				<div className="shell">
					<div className="sec__head reveal">
						<span className="sec__eyebrow">Under the hood</span>
						<h2 className="sec__title">
							Ambient Listening is powered by OHM, our clinical AI platform.
						</h2>
						<p className="sec__intro">
							Built for Indian clinical settings and Indic languages from the
							ground up.
						</p>
						<Link href="/healthcare" className="btn btn--outline btn--lg">
							Explore OHM
						</Link>
					</div>
				</div>
			</section>

			<CtaBand
				title="Give your doctors 90 minutes back, every day."
				text="Deployed in a government hospital today. See how to bring it to yours."
			/>
		</>
	);
}
