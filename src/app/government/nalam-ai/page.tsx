import type { Metadata } from "next";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";
import { MockChat } from "@/components/illustrations";

export const metadata: Metadata = {
	title: "Nalam AI — Hospital access on WhatsApp",
	description:
		"Nalam AI puts the whole outpatient journey on WhatsApp. Live across 22 districts of Tamil Nadu.",
	alternates: { canonical: "/government/nalam-ai" },
};

const FEATURES = [
	{
		title: "Appointments on WhatsApp",
		desc: "Booked from the phone they already own. No queue.",
	},
	{
		title: "Prescriptions to the phone",
		desc: "Delivered to the patient's WhatsApp. Nothing to collect.",
	},
	{
		title: "Lab & scan reports delivered",
		desc: "Reports arrive on WhatsApp. No second trip.",
	},
	{
		title: "e-Visit",
		desc: "A consultation without travelling to the hospital.",
	},
	{
		title: "Geo-fencing",
		desc: "Each citizen mapped to their nearest facility.",
	},
	{
		title: "e-Seva assistance",
		desc: "e-Seva centres help anyone without a smartphone.",
	},
];

export default function NalamPage() {
	return (
		<>
			<PageHero
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Government", href: "/government" },
					{ label: "Nalam AI" },
				]}
				eyebrow="Deployed · Health · 22 districts"
				title={
					<>
						Nalam AI — the hospital
						<br />
						in the <em>patient&apos;s pocket.</em>
					</>
				}
				lede="Launched at Rajiv Gandhi Government General Hospital, Chennai — now live across 22 districts."
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
							<h2>1.5 M+ messages in the first month.</h2>
							<p>
								Citizens took to it immediately — booking appointments, receiving
								prescriptions and collecting reports on WhatsApp, in their own
								language.
							</p>
							<p>
								No new app, no account, no counter. The entire outpatient journey,
								on a phone they already own.
							</p>
						</div>
						<div className="split__media split__media--mock reveal">
							<MockChat />
							<div className="split__badge">Live across 22 districts</div>
						</div>
					</div>
				</div>
			</section>

			{/* features */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">What Nalam AI does</span>
						<h2 className="sec__title">The whole hospital journey, on WhatsApp.</h2>
					</div>
					<FeatureGrid items={FEATURES} />
				</div>
			</section>

			{/* how it works */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">How it works</span>
						<h2 className="sec__title">From &ldquo;Hi&rdquo; to done, in a chat.</h2>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>The citizen messages the number</h3>
								<p>A WhatsApp message starts the flow — in Tamil or English.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Booked at the nearest facility</h3>
								<p>
									Geo-fencing maps the citizen to their closest hospital and books
									the appointment.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>Everything comes back to the phone</h3>
								<p>Prescriptions and reports are delivered on WhatsApp.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>No one is left out</h3>
								<p>
									e-Seva centres assist citizens without a smartphone; e-Visit
									enables consultations without travel.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Put your government hospitals in every citizen's pocket."
				text="Nalam AI is proven across 22 districts. See how it maps to your health system."
			/>
		</>
	);
}
