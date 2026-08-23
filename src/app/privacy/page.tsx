import type { Metadata } from "next";

import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"How Open Holistic AI Solutions Private Limited collects, uses and protects personal data, in line with India's Digital Personal Data Protection Act, 2023.",
	alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
	return (
		<LegalShell eyebrow="Legal" title="Privacy Policy" updated="23 August 2026">
			<p className="legal__intro">
				Open Holistic AI Solutions Private Limited (&ldquo;Open Holistic
				AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting
				your privacy. This policy explains what personal data we collect through
				this website and our business engagements, how we use it, and the rights
				you have under India&apos;s Digital Personal Data Protection Act, 2023
				(&ldquo;DPDP Act&rdquo;).
			</p>

			<h2>
				<span className="n">01</span>Who we are
			</h2>
			<p>
				Open Holistic AI Solutions Private Limited is a company incorporated in
				India, based at IIT Madras Research Park, Chennai, Tamil Nadu. For the
				purposes of the DPDP Act, we act as the <strong>Data Fiduciary</strong>{" "}
				for personal data processed through this website.
			</p>

			<h2>
				<span className="n">02</span>Data we collect
			</h2>
			<ul>
				<li>
					<strong>Contact details</strong> you provide voluntarily — name, email
					address, organisation, phone number and the content of any message you
					send us.
				</li>
				<li>
					<strong>Technical data</strong> — basic, aggregated information such as
					browser type, device and pages visited, used to keep the site secure
					and improve it.
				</li>
			</ul>
			<p>
				This website is a marketing site. It is <strong>not</strong> the channel
				through which our deployed products process citizen or patient data —
				that data is handled within government or hospital infrastructure under
				separate agreements (see section 07).
			</p>

			<h2>
				<span className="n">03</span>How we use your data
			</h2>
			<ul>
				<li>To respond to enquiries and arrange briefings or demonstrations.</li>
				<li>To manage our relationship with prospective and existing partners.</li>
				<li>To operate, secure and improve this website.</li>
				<li>To comply with legal and regulatory obligations.</li>
			</ul>
			<p>
				We rely on your consent, and on our legitimate business interests, as the
				lawful basis for this processing.
			</p>

			<h2>
				<span className="n">04</span>Sharing &amp; storage
			</h2>
			<p>
				We do not sell your personal data. We share it only with trusted service
				providers who help us operate this website and communications, under
				appropriate confidentiality obligations. Where feasible, personal data is
				stored on infrastructure located in India.
			</p>

			<h2>
				<span className="n">05</span>Retention
			</h2>
			<p>
				We keep personal data only for as long as necessary for the purposes set
				out above, or as required by law, after which it is deleted or anonymised.
			</p>

			<h2 id="dpdp">
				<span className="n">06</span>Your rights under the DPDP Act, 2023
			</h2>
			<p>As a Data Principal, you have the right to:</p>
			<ul>
				<li>Access a summary of the personal data we hold about you.</li>
				<li>Request correction, completion, updating or erasure of your data.</li>
				<li>Nominate another person to exercise your rights in specified cases.</li>
				<li>
					Grievance redressal, and to withdraw consent at any time (without
					affecting processing already carried out).
				</li>
			</ul>
			<p>
				To exercise any of these rights, contact us at{" "}
				<a href="mailto:info@openholisticai.in">info@openholisticai.in</a>. If you
				are not satisfied with our response, you may approach the Data Protection
				Board of India.
			</p>

			<h2>
				<span className="n">07</span>Products, citizen &amp; patient data
			</h2>
			<p>
				Our deployed solutions (including OHM and the Government AI Layer) are
				designed to be <strong>sovereign by default</strong>: they run on
				government or hospital infrastructure, and any citizen or patient data is
				controlled by that institution as the Data Fiduciary. Our AI engine is
				architected to retain no patient identifiers or transcripts. The handling
				of such data is governed by the specific agreement with each institution,
				not by this website policy.
			</p>

			<h2>
				<span className="n">08</span>Cookies
			</h2>
			<p>
				This site uses only essential cookies required for it to function and for
				basic, privacy-respecting analytics. You can control cookies through your
				browser settings.
			</p>

			<h2>
				<span className="n">09</span>Changes &amp; contact
			</h2>
			<p>
				We may update this policy from time to time; the &ldquo;last
				updated&rdquo; date above reflects the latest version. Questions or
				requests can be sent to{" "}
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
