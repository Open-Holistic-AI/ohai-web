import type { Metadata } from "next";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "OHAI Platform — Governed AI everywhere",
	description:
		"One platform for working with AI across web, terminal and desktop — managed models, admin controls and per-user usage. A sovereign, governed AI workspace for your whole organisation.",
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
				lede="The web. The terminal. A native desktop app. Sign in once, and use the same models, tools and history across all of them — under your organisation's control."
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
								Most organisations end up with AI everywhere and control nowhere:
								personal accounts, unmanaged keys, no visibility. OHAI is the
								opposite — one identity, one set of managed models, one admin
								console, and clear per-user usage across every surface.
							</p>
							<ul>
								<li>Sign in once; your models and history follow you.</li>
								<li>One bill and one console — no per-person key sprawl.</li>
								<li>Deployable on your own infrastructure.</li>
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
								desc: "Multi-model chat with streaming, branching and history; live artifacts; documents in and out (PDF, Word, Excel, PPT); diagrams, charts and tools.",
							},
							{
								title: "Command line (CLI)",
								desc: "An agentic coding assistant that reads, edits and creates files, runs commands and iterates — with plan and build modes and permission controls.",
							},
							{
								title: "Desktop",
								desc: "A native app for macOS, Windows and Linux — the full agent and chat experience, auto-updating, multi-window, offline-friendly.",
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
								desc: "Sign in once; the same models and history follow you across web, CLI and desktop.",
							},
							{
								title: "Managed models",
								desc: "A curated set of high-quality models, ready to use, with no key management for end users.",
							},
							{
								title: "Usage tracking",
								desc: "Clear, per-user usage across every surface — visible at a glance.",
							},
							{
								title: "Administration",
								desc: "A dedicated control panel to manage users, models, limits and policies.",
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
								<p>A sovereign, administered AI workspace on infrastructure you control.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>Universities &amp; colleges</h3>
								<p>
									A private AI platform for faculty, researchers and students —
									see our <a href="/education" style={{ color: "#1e6e7e" }}>education offering</a>.
								</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>Enterprises</h3>
								<p>Replace a sprawl of individual AI subscriptions with one managed, measurable platform.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">04</span>
							<div>
								<h3>Developer teams</h3>
								<p>The agentic CLI and SDKs for building on top of managed models.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Bring governed AI to your whole organisation."
				text="We'll walk your team through the platform, the admin console and the sovereign deployment options."
				primaryLabel="Get a walkthrough"
			/>
		</>
	);
}
