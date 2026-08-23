import type { Metadata } from "next";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "OHAI Platform — Governed AI everywhere",
	description:
		"Governed AI across web, terminal and desktop — managed models, admin controls, per-user usage.",
	alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
	return (
		<>
			<PageHero
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Products" },
					{ label: "OHAI Platform" },
				]}
				eyebrow="The OHAI Platform"
				title={
					<>
						One platform for AI —
						<br />
						<em>everywhere</em> your people work.
					</>
				}
				lede="Web, terminal and desktop — one sign-in, same models everywhere, under your control."
				actions={[
					{ label: "Get a walkthrough", href: "/contact", primary: true },
					{ label: "Visit the app", href: "https://app.openholisticai.in" },
				]}
			/>

			{/* the idea + image */}
			<section className="sec">
				<div className="shell">
					<div className="split">
						<div className="reveal">
							<span className="kicker">The idea</span>
							<h2>Governed AI — not a scatter of subscriptions.</h2>
							<p>
								Most organisations get AI everywhere and control nowhere. OHAI is
								one identity, managed models, one console and per-user usage.
							</p>
							<ul>
								<li>Sign in once, models follow you.</li>
								<li>One bill, one console.</li>
								<li>Deploy on your own infrastructure.</li>
							</ul>
						</div>
						<div className="split__media reveal" style={{ background: "none" }}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="/media/ohai-workspace.jpg"
								alt="Working with the OHAI Platform"
								loading="lazy"
							/>
							<div className="split__badge">One account, everywhere</div>
						</div>
					</div>
				</div>
			</section>

			{/* three surfaces */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Three surfaces, one account</span>
						<h2 className="sec__title">Wherever the work happens.</h2>
					</div>
					<FeatureGrid
						items={[
							{
								title: "Web",
								desc: "Multi-model chat, live artifacts, documents, diagrams and tools.",
							},
							{
								title: "Command line (CLI)",
								desc: "Agentic coding assistant with plan, build and permission controls.",
							},
							{
								title: "Desktop",
								desc: "Native app for macOS, Windows and Linux — full agent and chat.",
							},
						]}
					/>
				</div>
			</section>

			{/* governed */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Across every surface</span>
						<h2 className="sec__title">Managed, measured, governed.</h2>
					</div>
					<FeatureGrid
						cols={2}
						items={[
							{
								title: "Unified identity",
								desc: "One sign-in across web, CLI and desktop.",
							},
							{
								title: "Managed models",
								desc: "Curated models, ready to use, no key management.",
							},
							{
								title: "Usage tracking",
								desc: "Per-user usage across every surface.",
							},
							{
								title: "Administration",
								desc: "One panel for users, models, limits and policies.",
							},
						]}
					/>
				</div>
			</section>

			{/* who it's for */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Who it&apos;s for</span>
						<h2 className="sec__title">One governed platform for every team.</h2>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>Government teams</h3>
								<p>A sovereign AI workspace on infrastructure you control.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Universities &amp; colleges</h3>
								<p>
									Private AI for faculty, researchers and students —
									see our <a href="/education" style={{ color: "#1e6e7e" }}>education offering</a>.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>Enterprises</h3>
								<p>Replace scattered AI subscriptions with one managed platform.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>Developer teams</h3>
								<p>Agentic CLI and SDKs for building on managed models.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Bring governed AI to your whole organisation."
				text="We'll walk your team through the platform, console and deployment options."
				primaryLabel="Get a walkthrough"
			/>
		</>
	);
}
