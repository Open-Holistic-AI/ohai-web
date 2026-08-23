import type { Metadata } from "next";

import { MockFiles } from "@/components/illustrations";
import Link from "next/link";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "DIPR Digitalisation — Paperless departments, every file traceable",
	description:
		"Paperwork digitised end to end for DIPR, Government of Tamil Nadu — every file traceable.",
	alternates: { canonical: "/government/dipr" },
};

const FEATURES = [
	{
		title: "Day-to-day paperwork digitised",
		desc: "Every file moves through the system. No parallel paper trail.",
	},
	{
		title: "Every file traceable",
		desc: "From raised to closed, the whole journey is on record.",
	},
	{
		title: "Faster, simpler workflows",
		desc: "Less friction for the staff who run them daily.",
	},
	{
		title: "Full audit trail",
		desc: "Every action logged — who did what, and when.",
	},
	{
		title: "A working template",
		desc: "A proven pattern for any department on paper.",
	},
	{
		title: "Government infrastructure",
		desc: "Runs on government infrastructure, compliant with the DPDP Act, 2023.",
	},
];

export default function DiprPage() {
	return (
		<>
			<PageHero
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Government", href: "/government" },
					{ label: "DIPR Digitalisation" },
				]}
				eyebrow="Deployed · Administration · Government of Tamil Nadu"
				title={
					<>
						Paperless departments,
						<br />
						<em>every file traceable.</em>
					</>
				}
				lede="Signed with the Department of Information and Public Relations (DIPR), Government of Tamil Nadu — paperwork digitised end to end."
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
							<h2>100% of the process digitised, end to end.</h2>
							<p>
								The whole file journey lives in one system — no parallel paper
								trail to reconcile, no record that quietly goes missing.
							</p>
							<p>
								Workflows are faster and simpler for the staff who run them — the
								same work, with less friction and a complete record.
							</p>
						</div>
						<div className="split__media split__media--mock reveal">
							<MockFiles />
							<div className="split__badge">DIPR · Govt. of Tamil Nadu</div>
						</div>
					</div>
				</div>
			</section>

			{/* features */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">What we delivered</span>
						<h2 className="sec__title">
							Paperwork digitised, every file on record.
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
							From the file being raised to the file being closed.
						</h2>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>Intake digitised</h3>
								<p>
									The file is captured digitally when raised — no paper original to
									chase later.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Routed automatically</h3>
								<p>
									It moves to the right desk on its own — no waiting to be
									hand-carried across the department.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>Tracked at every stage</h3>
								<p>Progress is visible at each step, so anyone can see where a file stands.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>Closed with a clean record</h3>
								<p>
									The file closes with a complete, auditable record of everything
									that happened.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* template for any department */}
			<section className="sec sec--tight sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Beyond DIPR</span>
						<h2 className="sec__title">A template for any department.</h2>
					</div>
					<p className="mission__body">
						The same pattern — digital intake, automatic routing, tracking and
						an auditable close — maps onto any department on paper.
					</p>
					<p className="mission__body">
						Because it runs on government infrastructure and is DPDP Act, 2023
						compliant, extending it means shaping the workflow, not rebuilding.
					</p>
					<Link href="/contact" className="btn btn--outline">
						Extend it to your department
					</Link>
				</div>
			</section>

			<CtaBand
				title="Digitise any department that still runs on paper."
				text="The DIPR template is proven. See how the same pattern extends across your department."
			/>
		</>
	);
}
