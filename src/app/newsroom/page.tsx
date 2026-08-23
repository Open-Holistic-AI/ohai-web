import type { Metadata } from "next";

import { CtaBand, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "Newsroom",
	description:
		"Press coverage, milestones and media enquiries for Open Holistic AI.",
	alternates: { canonical: "/newsroom" },
};

const PRESS = [
	{
		outlet: "DT NEXT",
		headline:
			"Tamil Nadu launches Nalam AI on WhatsApp for OP appointments",
		summary:
			"Live across 22 districts; piloted at Rajiv Gandhi Government General Hospital, Chennai.",
		date: "8 July 2026",
	},
	{
		outlet: "THANTHI TV",
		headline: "Televised report on the Nalam AI launch",
		summary: "Tamil news coverage of appointments booked without queues.",
		date: "Broadcast, 2026",
	},
];

const MILESTONES = [
	{
		n: "01",
		title:
			"Nalam AI launched at Rajiv Gandhi Government General Hospital, Chennai",
		desc: "The hospital-on-WhatsApp service went live on 8 July 2026.",
	},
	{
		n: "02",
		title: "1.5 M+ messages handled in the first month",
		desc: "Live across 22 districts of Tamil Nadu.",
	},
	{
		n: "03",
		title: "Ambient Listening live at Rajiv Gandhi GGH",
		desc: "90 min saved per doctor daily, under an MOU with the National Health Mission.",
	},
	{
		n: "04",
		title: "DIPR Digitalisation",
		desc: "DIPR department process digitised end to end.",
	},
	{
		n: "05",
		title: "IITM Pravartak partnership",
		desc: "Agreement signed with CEO Dr. M. J. Shankar Raman.",
	},
];

export default function NewsroomPage() {
	return (
		<>
			<PageHero
				crumbs={[{ label: "Home", href: "/" }, { label: "Newsroom" }]}
				eyebrow="Newsroom"
				title={
					<>
						In the <em>news.</em>
					</>
				}
				lede="The stories and milestones behind our work."
			/>

			{/* in the press */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">In the press</span>
						<h2 className="sec__title">What the media is reporting.</h2>
					</div>
					<div className="fgrid fgrid--2">
						{PRESS.map((p) => (
							<div className="fcard reveal" key={p.headline}>
								<span className="kicker">{p.outlet}</span>
								<h3>{p.headline}</h3>
								<p>{p.summary}</p>
								<p>{p.date}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* milestones */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Milestones</span>
						<h2 className="sec__title">From launch to statewide.</h2>
					</div>
					<div className="steps">
						{MILESTONES.map((m) => (
							<div className="step reveal" key={m.n}>
								<span className="step__n">{m.n}</span>
								<div>
									<h3>{m.title}</h3>
									<p>{m.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* media enquiries */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Media enquiries</span>
						<h2 className="sec__title">For journalists and editors.</h2>
						<p className="sec__intro">
							Press kit, logos and photographs available on request.
						</p>
					</div>
					<div className="fgrid fgrid--2">
						<div className="fcard reveal">
							<span className="kicker">Contact</span>
							<h3>Press desk</h3>
							<p>
								Email{" "}
								<a href="mailto:info@openholisticai.in">
									info@openholisticai.in
								</a>{" "}
								for interviews and assets.
							</p>
						</div>
						<div className="fcard reveal">
							<span className="kicker">Location</span>
							<h3>Where we are</h3>
							<p>IIT Madras Research Park, Chennai, India.</p>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Covering our work?"
				text="Reach our team for interviews, assets and briefings."
				primaryLabel="Contact us"
				primaryHref="/contact"
			/>
		</>
	);
}
