import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand, FeatureGrid, PageHero } from "@/components/bits";

export const metadata: Metadata = {
	title: "OHM — Sovereign clinical AI",
	description:
		"OHM is Open Holistic AI's clinical platform: ambient documentation that lets doctors treat instead of type, patient access on WhatsApp, and advisory clinical intelligence — all on your hospital's own infrastructure.",
	alternates: { canonical: "/healthcare" },
};

const PLATFORM = [
	{
		title: "Doctor App",
		desc: "The clinical workspace — patient records, voice-driven visit notes, prescriptions, referrals and timelines.",
	},
	{
		title: "Ambient recording & extraction",
		desc: "Record naturally in 20+ Indian languages; get a structured clinical record, not just a transcript.",
	},
	{
		title: "24+ clinical templates",
		desc: "SOAP, OPD prescription, discharge, ICU daily, psychiatry, cardiology, pediatrics, emergency, MLC and more — customisable per hospital.",
	},
	{
		title: "AI Insights panel",
		desc: "Advisory, guideline-aligned decision support alongside every note — never inside the signed record.",
	},
	{
		title: "Hospital Admin Console",
		desc: "Doctors, roles, usage, branding, templates, drug formulary and a full audit log.",
	},
	{
		title: "Studio & SDKs",
		desc: "Build custom clinical extraction APIs and integrate OHM into your own apps — web, Node, React Native.",
	},
	{
		title: "Coder Tools",
		desc: "AI-assisted ICD-10 / SNOMED / LOINC coding and cross-mapping for records teams.",
	},
	{
		title: "Patient access on WhatsApp",
		desc: "Appointments, prescriptions and reports delivered to the phone the patient already owns.",
	},
	{
		title: "Runs on your infrastructure",
		desc: "On-premise or sovereign cloud — patient data never leaves the hospital's control.",
	},
];

export default function HealthcarePage() {
	return (
		<>
			<PageHero
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Products" },
					{ label: "OHM" },
				]}
				eyebrow="Healthcare · OHM"
				title={
					<>
						OHM — sovereign medical
						<br />
						intelligence for <em>India.</em>
					</>
				}
				lede="Doctors treat. The record writes itself. Patients get appointments, prescriptions and reports on the phone in their pocket. All on your hospital's own infrastructure, with zero patient data leaving your control."
				actions={[
					{ label: "Book a hospital demo", href: "/contact", primary: true },
					{ label: "For doctors — ohm.doctor", href: "https://ohm.doctor" },
				]}
			/>

			{/* the problem */}
			<section className="sec">
				<div className="shell">
					<div className="mission__grid">
						<p className="mission__lead reveal">
							Doctors spend more time typing than treating. OHM removes the
							paperwork from the consultation.
						</p>
						<div className="mission__body reveal">
							<p>
								In a busy government or private outpatient ward, the record is the
								bottleneck. Notes get written after hours, or not at all. Patients
								travel twice — once to consult, again to collect a report. Coding,
								formulary checks and follow-ups fall through the cracks.
							</p>
							<p>
								OHM puts the hospital in the patient&apos;s pocket and gives the
								clinician their attention back — without asking anyone to change
								how they work. It is trusted, compliant and standards-based:
								HL7&nbsp;FHIR&nbsp;R4, ABDM-aligned, NHA terminology and DPDP Act
								2023 compliant.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ambient documentation */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="split">
						<div className="reveal">
							<span className="kicker">Ambient documentation</span>
							<h2>The doctor speaks. OHM writes the note.</h2>
							<p>
								A doctor records the consultation naturally — in Tamil, English
								or code-mixed speech. OHM transcribes it, understands it
								clinically, and produces a complete, structured medical record
								before the patient leaves the room.
							</p>
							<ul>
								<li>Hands-free records — no typing during the consultation.</li>
								<li>Accurate in real ward conditions — noise, cross-talk, multiple speakers.</li>
								<li>20+ Indian languages, returned in clean clinical English.</li>
								<li>Structured fields — diagnoses, medications, allergies, investigations, vitals.</li>
								<li>The doctor always decides — every field is editable.</li>
							</ul>
						</div>
						<div className="split__media reveal">
							<div className="split__badge">90 min saved per doctor, daily</div>
						</div>
					</div>
				</div>
			</section>

			{/* patient access */}
			<section className="sec">
				<div className="shell">
					<div className="split split--flip">
						<div className="split__media reveal">
							<div className="split__badge">1.5 M+ messages · month one</div>
						</div>
						<div className="reveal">
							<span className="kicker">Patient access · Nalam AI</span>
							<h2>The whole hospital journey, on WhatsApp.</h2>
							<p>
								Patient-facing access is built in. Appointments, prescriptions and
								reports reach the patient on the app already on their phone — no
								counter, no token, no queue.
							</p>
							<ul>
								<li>Appointments booked on WhatsApp.</li>
								<li>Prescriptions and lab/scan reports delivered to the phone.</li>
								<li>e-Visit — consult without travelling; geo-fencing to the nearest facility.</li>
							</ul>
							<Link
								href="/government/nalam-ai"
								className="btn btn--outline"
								style={{ marginTop: 24 }}
							>
								See Nalam AI in government →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* clinical intelligence */}
			<section className="sec sec--alt">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Clinical intelligence</span>
						<h2 className="sec__title">
							Advisory intelligence, always clinician-facing.
						</h2>
						<p className="sec__intro">
							OHM surfaces patient-specific, guideline-aligned insights alongside
							the note — never inside it, never directive. The doctor stays the
							decider.
						</p>
					</div>
					<FeatureGrid
						items={[
							{
								title: "Red-flag & risk detection",
								desc: "Escalation prompts, safety-netting and critical alerts at the point of care.",
							},
							{
								title: "Guideline-gap & screening prompts",
								desc: "Tuned to Indian national programmes — NTEP TB, immunisation, diabetes and hypertension care, antenatal and more.",
							},
							{
								title: "Specialty-aware",
								desc: "Psychiatry, cardiology, pediatrics, emergency, OB-GYN, dermatology, ENT, orthopedics, ophthalmology, surgery and general practice.",
							},
							{
								title: "Medical coding support",
								desc: "ICD-10, SNOMED CT and LOINC candidates with rationale and confidence.",
							},
							{
								title: "Formulary & interactions",
								desc: "Drug formulary awareness with cost-saving substitutions.",
							},
							{
								title: "Learns per doctor",
								desc: "Clinician feedback calibrates the system over time — an adaptive co-pilot.",
							},
						]}
					/>
				</div>
			</section>

			{/* sovereignty */}
			<section className="sec">
				<div className="shell">
					<div className="mission__grid">
						<p className="mission__lead reveal">
							Your patient data never leaves your hospital.
						</p>
						<div className="mission__body reveal">
							<p>
								OHM separates the clinical workspace (which runs inside the
								hospital) from the AI engine (which holds the intelligence). The
								design guarantees that no patient-identifying data is ever stored
								outside the hospital&apos;s control.
							</p>
							<p>
								The AI layer sees only what it needs to process a request and
								stores no transcripts or patient identifiers. Every action is
								audited. Everything is standards-based and interoperable — clean
								APIs over your existing EMR or HMIS, with no rip-and-replace.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* full platform */}
			<section className="sec sec--alt" id="features">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">What&apos;s inside OHM</span>
						<h2 className="sec__title">One platform, every clinical surface.</h2>
					</div>
					<FeatureGrid items={PLATFORM} />
				</div>
			</section>

			{/* roadmap */}
			<section className="sec">
				<div className="shell">
					<div className="sec__head">
						<span className="sec__eyebrow">Roadmap</span>
						<h2 className="sec__title">Where OHM is headed.</h2>
					</div>
					<div className="steps">
						<div className="step reveal">
							<span className="step__n">01</span>
							<div>
								<h3>Nationwide ambient documentation + clinical decision support</h3>
								<p>Cloud and on-prem, at national scale.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">02</span>
							<div>
								<h3>OHM Omni</h3>
								<p>Our multimodal medical model, offered under licence.</p>
							</div>
						</div>
						<div className="step reveal">
							<span className="step__n">03</span>
							<div>
								<h3>OHM Ambient Devices</h3>
								<p>Clinic-ready edge units bringing sovereign medical AI to any consultation room.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Give your doctors their time back. Give patients their hospital in their pocket."
				text="Book a demo and we'll show you OHM running in a government hospital today."
				primaryLabel="Book a hospital demo"
			/>
		</>
	);
}
