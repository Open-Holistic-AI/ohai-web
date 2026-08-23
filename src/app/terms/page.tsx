import type { Metadata } from "next";

import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
	title: "Terms & Conditions",
	description:
		"The terms governing your use of the Open Holistic AI Solutions Private Limited website.",
	alternates: { canonical: "/terms" },
};

export default function TermsPage() {
	return (
		<LegalShell
			eyebrow="Legal"
			title="Terms & Conditions"
			updated="23 August 2026"
		>
			<p className="legal__intro">
				These Terms &amp; Conditions govern your use of the website of Open
				Holistic AI Solutions Private Limited (&ldquo;Open Holistic AI&rdquo;,
				&ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing or using this website,
				you agree to these terms. If you do not agree, please do not use the site.
			</p>

			<h2>
				<span className="n">01</span>About this website
			</h2>
			<p>
				This is the marketing and informational website of Open Holistic AI, a
				company incorporated in India and based at IIT Madras Research Park,
				Chennai, Tamil Nadu. It describes our company, solutions and products. It
				does not itself provide the deployed products described on it; access to
				those is governed by separate written agreements.
			</p>

			<h2>
				<span className="n">02</span>Use of the site
			</h2>
			<ul>
				<li>You may view and use this site for lawful, informational purposes.</li>
				<li>
					You must not attempt to disrupt, probe or gain unauthorised access to
					the site or its underlying systems.
				</li>
				<li>
					You must not use the site to transmit unlawful, harmful or infringing
					content.
				</li>
			</ul>

			<h2>
				<span className="n">03</span>Intellectual property
			</h2>
			<p>
				All content on this website — including text, design, graphics, logos, the
				names &ldquo;Open Holistic AI&rdquo;, &ldquo;OHM&rdquo;, &ldquo;OHAI&rdquo;
				and associated marks, and the underlying models and technology — is owned
				by or licensed to Open Holistic AI and is protected by applicable
				intellectual-property laws. You may not copy, reproduce or exploit any
				part of it without our prior written permission. Third-party names, logos
				and trademarks shown on the site remain the property of their respective
				owners and are used for identification only.
			</p>

			<h2>
				<span className="n">04</span>No professional advice
			</h2>
			<p>
				Information on this site is provided for general purposes only and does
				not constitute medical, clinical, legal or professional advice. Our
				clinical products present <strong>advisory, clinician-facing</strong>{" "}
				information; a qualified professional remains responsible for every
				decision. Nothing on this site should be relied upon as a substitute for
				professional judgement.
			</p>

			<h2>
				<span className="n">05</span>Third-party links
			</h2>
			<p>
				This site may link to third-party websites (such as{" "}
				<strong>ohm.doctor</strong> and <strong>app.openholisticai.in</strong>).
				We are not responsible for the content or practices of those sites, which
				are governed by their own terms.
			</p>

			<h2>
				<span className="n">06</span>Disclaimer &amp; liability
			</h2>
			<p>
				This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
				available&rdquo; basis, without warranties of any kind. To the maximum
				extent permitted by law, Open Holistic AI shall not be liable for any
				indirect, incidental or consequential loss arising from your use of, or
				inability to use, this website. Nothing in these terms limits any
				liability that cannot be limited under applicable law.
			</p>

			<h2>
				<span className="n">07</span>Privacy
			</h2>
			<p>
				Our handling of personal data is described in our{" "}
				<a href="/privacy">Privacy Policy</a>, which forms part of these terms.
			</p>

			<h2>
				<span className="n">08</span>Governing law
			</h2>
			<p>
				These terms are governed by the laws of India, and the courts at Chennai,
				Tamil Nadu shall have exclusive jurisdiction over any dispute arising from
				them.
			</p>

			<h2>
				<span className="n">09</span>Contact
			</h2>
			<p>
				Questions about these terms can be sent to{" "}
				<a href="mailto:info@openholisticai.in">info@openholisticai.in</a> or by
				post to Open Holistic AI Solutions Private Limited, IIT Madras Research
				Park, Chennai, Tamil Nadu, India.
			</p>

			<hr />
			<p style={{ fontSize: "13.5px", color: "#6a6862" }}>
				This document is provided for general information and is a template that
				should be reviewed by qualified legal counsel before it is relied upon.
			</p>
		</LegalShell>
	);
}
