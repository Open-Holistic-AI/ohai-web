import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "Ambient Listening — the record writes itself",
	description:
		"Ambient documentation for government hospitals. The doctor speaks and the clinical record writes itself — accurate in crowded outpatient wards, across 20+ Indian languages. Deployed at Rajiv Gandhi GGH, Chennai with the National Health Mission, Tamil Nadu.",
	alternates: { canonical: "/government/ambient-listening" },
};

const FEATURES = [
	{
		title: "No typing during the consultation",
		desc: "The doctor talks to the patient, not to a keyboard. The note is captured from the conversation itself.",
	},
	{
		title: "Accurate in real ward conditions",
		desc: "Built for the crowded outpatient reality — background noise, cross-talk and Tamil/English code-mixing, not a quiet studio.",
	},
	{
		title: "20+ Indian languages",
		desc: "The consultation can happen in any of 20+ Indic languages; the record is returned in clean, clinical English.",
	},
	{
		title: "A structured record, not a blob of text",
		desc: "Diagnoses, medications, allergies, investigations and vitals each land in their own field — ready for the record system.",
	},
	{
		title: "The doctor always decides",
		desc: "AI fills the gaps, but every field is editable. Nothing is signed until the clinician has reviewed it.",
	},
	{
		title: "Built with the NHM, Tamil Nadu",
		desc: "Delivered in partnership with the National Health Mission, Tamil Nadu, under a signed MOU.",
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
				lede="Running at Rajiv Gandhi Government General Hospital, Chennai. The doctor speaks and the system writes the clinical record — accurately, even in crowded outpatient wards."
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
								There is no typing during the consultation, so the doctor&apos;s
								full attention stays on the patient in front of them — not on a
								screen and a keyboard.
							</p>
							<p>
								By the time the patient leaves the room, the clinical record is
								already complete. That is roughly an hour and a half of a
								doctor&apos;s day handed back, in a system where every minute of
								clinician time is scarce.
							</p>
						</div>
						<div className="split__media reveal">
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
									pausing to dictate, no keyboard between them.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Speech becomes a transcript</h3>
								<p>
									The conversation is transcribed across 20+ Indic languages,
									holding up against ward noise and Tamil/English code-mixing.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>The transcript becomes a structured note</h3>
								<p>
									Diagnoses, medications, allergies, investigations and vitals are
									pulled out into their own fields — a clinical record, not a wall
									of text.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>The doctor reviews and signs</h3>
								<p>
									Every field is editable. The clinician checks the note and signs
									off — complete before the patient leaves the room.
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
							The same platform behind our healthcare products — built for Indian
							clinical settings and Indic languages from the ground up.
						</p>
						<Link href="/healthcare" className="btn btn--outline btn--lg">
							Explore OHM
						</Link>
					</div>
				</div>
			</section>

			<CtaBand
				title="Give your doctors 90 minutes back, every day."
				text="Ambient documentation is deployed and working in a government hospital today. We'll show you how to bring it to yours."
			/>
		</>
	);
}
