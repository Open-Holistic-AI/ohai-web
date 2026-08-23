import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Tell us what you're trying to do — run a government programme, a hospital, a college, or partner with us — and we'll show you what's already possible with sovereign AI.",
	alternates: { canonical: "/contact" },
};

export default function ContactPage() {
	return (
		<>
			<PageHero
				crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
				eyebrow="Contact"
				title={
					<>
						Let&apos;s <em>talk.</em>
					</>
				}
				lede="Whether you run a government department, a hospital, a college, or you're a partner or investor — tell us what you're trying to do, and we'll show you what's already possible."
			/>

			{/* contact form + info cards */}
			<section className="sec">
				<div className="shell">
					<div className="split reveal">
						<div>
							<span className="kicker">Send us a message</span>
							<h2>Start the conversation.</h2>
							<form
								className="cform"
								action="mailto:info@openholisticai.in"
								method="post"
								encType="text/plain"
							>
								<div className="cform__row">
									<div>
										<label htmlFor="name">Name</label>
										<input id="name" type="text" name="name" required />
									</div>
									<div>
										<label htmlFor="email">Email</label>
										<input id="email" type="email" name="email" required />
									</div>
								</div>
								<div className="cform__row">
									<div>
										<label htmlFor="organisation">Organisation</label>
										<input id="organisation" type="text" name="organisation" />
									</div>
									<div>
										<label htmlFor="phone">Phone</label>
										<input id="phone" type="tel" name="phone" />
									</div>
								</div>
								<div>
									<label htmlFor="interest">Interest</label>
									<select id="interest" name="interest" defaultValue="">
										<option value="" disabled>
											Select an area
										</option>
										<option>Government &amp; public sector</option>
										<option>Healthcare / OHM</option>
										<option>Education / college</option>
										<option>OHAI Platform</option>
										<option>Partnership</option>
										<option>Investor relations</option>
										<option>Press / media</option>
										<option>Other</option>
									</select>
								</div>
								<div>
									<label htmlFor="message">Message</label>
									<textarea id="message" name="message" required />
								</div>
								<button type="submit" className="btn btn--dark btn--lg">
									Send message
								</button>
							</form>
							<p style={{ marginTop: 16, fontSize: 13, color: "var(--muted)" }}>
								Prefer email? Write to info@openholisticai.in — we respond within
								one business day.
							</p>
						</div>

						<div className="fgrid fgrid--2">
							<div className="fcard">
								<h3>General enquiries</h3>
								<p>info@openholisticai.in</p>
							</div>
							<div className="fcard">
								<h3>Healthcare &amp; investor relations</h3>
								<p>info@ohm.doctor</p>
							</div>
							<div className="fcard">
								<h3>State-government programmes</h3>
								<p>Deploy sovereign AI across your departments and districts.</p>
							</div>
							<div className="fcard">
								<h3>Hospital pilots</h3>
								<p>Put your outpatient journey on WhatsApp, like Nalam AI.</p>
							</div>
							<div className="fcard">
								<h3>Colleges &amp; institutions</h3>
								<p>Bring the OHAI platform to your students and campus.</p>
							</div>
							<div className="fcard">
								<h3>Response time</h3>
								<p>Within one business day.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* office */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Office</span>
						<h2 className="sec__title">Where to find us.</h2>
						<p className="sec__intro">
							Open Holistic AI Solutions Private Limited
							<br />
							IIT Madras Research Park
							<br />
							Chennai, Tamil Nadu, India
						</p>
						<p className="sec__intro">
							Backed by IIT Madras, Intel and IITM Pravartak.
						</p>
					</div>
				</div>
			</section>

			{/* closing band */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head reveal">
						<span className="sec__eyebrow">Sovereign AI</span>
						<h2 className="sec__title">
							Built by us, run on your infrastructure, reaching every citizen.
						</h2>
						<p className="sec__intro">
							<Link href="/government" className="btn btn--dark btn--lg">
								Explore government programmes
							</Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
