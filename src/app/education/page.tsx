import type { Metadata } from "next";

import { MockShield } from "@/components/illustrations";
import Link from "next/link";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "AI for Colleges — Private, on-prem, cost-effective",
	description:
		"Private, on-prem AI for colleges that replaces ChatGPT and Claude — flat campus pricing, data stays on campus.",
	alternates: { canonical: "/education" },
};

export default function EducationPage() {
	return (
		<>
			<PageHero
				dark
				crumbs={[{ label: "Home", href: "/" }, { label: "Education" }]}
				eyebrow="Education · AI for colleges"
				title={
					<>
						Private AI for your campus.
						<br />
						<em>Your</em> servers. <em>Your</em> data.
					</>
				}
				lede="An on-prem AI platform that replaces ChatGPT and Claude, so campus data stays home."
				actions={[
					{ label: "Talk to us about your campus", href: "/contact", primary: true },
					{ label: "See the cost model", href: "#cost" },
				]}
			/>

			{/* the problem */}
			<section className="sec">
				<div className="shell">
					<div className="mission__grid">
						<p className="mission__lead reveal">
							Colleges pay per seat for foreign AI — and send student data
							off-campus to do it.
						</p>
						<div className="mission__body reveal">
							<p>
								ChatGPT and Claude cost more with every licence, and every prompt
								leaves your network for a third party&apos;s servers.
							</p>
							<p>
								OHAI gives you the same AI as a private platform on your own
								infrastructure — one flat deployment, data inside your walls.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* what you get */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">One platform for the whole campus</span>
						<h2 className="sec__title">
							Everything a student or professor uses AI for — in private.
						</h2>
					</div>
					<FeatureGrid
						items={[
							{
								title: "AI chat & writing",
								desc: "Multi-model chat, documents, diagrams and artifacts.",
							},
							{
								title: "Coding assistant",
								desc: "Agentic coding for CS labs, projects and research.",
							},
							{
								title: "Research & documents",
								desc: "Summarise papers and generate Word, Excel, PDF and slides.",
							},
							{
								title: "Every student & staff member",
								desc: "Campus-wide access with one sign-in.",
							},
							{
								title: "Indian languages, first-class",
								desc: "Works naturally in Indian languages.",
							},
							{
								title: "Admin & usage controls",
								desc: "One panel for accounts, models, limits and usage.",
							},
						]}
					/>
				</div>
			</section>

			{/* on-prem / privacy */}
			<section className="sec" id="onprem">
				<div className="shell">
					<div className="split">
						<div className="reveal">
							<span className="kicker">Privacy-first · on-prem</span>
							<h2>Your data never leaves your servers.</h2>
							<p>
								Deployed on the college&apos;s own infrastructure — prompts,
								documents and student data stay inside your network.
							</p>
							<ul>
								<li>Runs on-prem or your private cloud.</li>
								<li>No campus data leaves.</li>
								<li>Never trains external models.</li>
								<li>DPDP Act 2023 compliant, fully audited.</li>
							</ul>
						</div>
						<div className="split__media split__media--mock reveal">
							<MockShield />
							<div className="split__badge">On your infrastructure</div>
						</div>
					</div>
				</div>
			</section>

			{/* comparison */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">How it compares</span>
						<h2 className="sec__title">
							The capability of ChatGPT &amp; Claude — without the trade-offs.
						</h2>
					</div>
					<div className="compare-wrap reveal">
						<table className="compare">
							<thead>
								<tr>
									<th>Capability</th>
									<th>OHAI (on-prem)</th>
									<th>ChatGPT / Claude (SaaS)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Data stays on campus</td>
									<td className="yes">Yes</td>
									<td className="no">No</td>
								</tr>
								<tr>
									<td>Flat, campus-wide cost</td>
									<td className="yes">Yes</td>
									<td className="no">Per-seat</td>
								</tr>
								<tr>
									<td>Runs on your own servers</td>
									<td className="yes">Yes</td>
									<td className="no">No</td>
								</tr>
								<tr>
									<td>Admin &amp; usage controls</td>
									<td className="yes">Full</td>
									<td>Limited</td>
								</tr>
								<tr>
									<td>Indian languages, first-class</td>
									<td className="yes">Yes</td>
									<td>Partial</td>
								</tr>
								<tr>
									<td>Deployed &amp; operated for you</td>
									<td className="yes">Yes — FDE</td>
									<td className="no">Self-serve</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* cost model */}
			<section className="sec" id="cost">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Cost model</span>
						<h2 className="sec__title">Flat and campus-wide — not per seat.</h2>
						<p className="sec__intro">
							Add every student and staff member at no extra cost.
						</p>
					</div>
					<div className="plans">
						<div className="plan reveal">
							<span className="plan__name">Department</span>
							<div className="plan__price">
								Pilot <span>/ one department</span>
							</div>
							<ul className="plan__list">
								<li>Private AI for one department</li>
								<li>On-prem or private cloud</li>
								<li>Admin console &amp; usage</li>
								<li>Fastest way to prove value</li>
							</ul>
							<Link href="/contact" className="btn btn--outline">
								Start a pilot
							</Link>
						</div>
						<div className="plan plan--featured reveal">
							<span className="plan__name">Whole campus</span>
							<div className="plan__price">
								Flat <span>/ campus / year</span>
							</div>
							<ul className="plan__list">
								<li>Unlimited students &amp; staff, no per-seat billing</li>
								<li>Chat, coding, research &amp; documents</li>
								<li>Deployed on your infrastructure</li>
								<li>Indian languages, admin &amp; audit</li>
								<li>Operated end-to-end by us</li>
							</ul>
							<Link href="/contact" className="btn btn--light">
								Talk to us
							</Link>
						</div>
						<div className="plan reveal">
							<span className="plan__name">Multi-campus</span>
							<div className="plan__price">
								Custom <span>/ university or state</span>
							</div>
							<ul className="plan__list">
								<li>Many colleges, one deployment</li>
								<li>Central administration</li>
								<li>State education-department scale</li>
								<li>Bespoke integration &amp; support</li>
							</ul>
							<Link href="/contact" className="btn btn--outline">
								Contact us
							</Link>
						</div>
					</div>
					<p className="sec__intro" style={{ fontSize: 13.5, color: "#6a6862" }}>
						Indicative tiers — scope and pricing shaped to your institution.
					</p>
				</div>
			</section>

			{/* FDE */}
			<section className="sec sec--alt" id="fde">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">FDE for colleges</span>
						<h2 className="sec__title">We build, deploy and run it for you.</h2>
						<p className="sec__intro">
							You don&apos;t need an AI team — we deploy, integrate and run it.
						</p>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>We deploy on your infrastructure</h3>
								<p>On-prem or private cloud, set up and secured by us.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>We roll it out to your campus</h3>
								<p>Accounts and access configured for students and staff.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>We operate and support it</h3>
								<p>Monitoring, updates and support — a working service, not a project.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Give your whole campus private AI — for less than per-seat SaaS."
				text="Tell us about your college and we'll scope an on-prem deployment that replaces ChatGPT and Claude."
				primaryLabel="Talk to us"
			/>
		</>
	);
}
