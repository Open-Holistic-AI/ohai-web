import Link from "next/link";

import { LogoMark } from "@/components/logo";

export function SiteFooter() {
	return (
		<footer className="footer">
			<div className="shell footer__shell">
				<div className="footer__brand">
					<Link className="brand" href="/">
						<LogoMark className="brand__mark" />
						<span className="brand__name">
							Open&nbsp;Holistic&nbsp;AI<i>Sovereign&nbsp;AI</i>
						</span>
					</Link>
					<p className="footer__tag">
						Sovereign AI — built by us, run on your
						<br />
						infrastructure, reaching every citizen.
					</p>
				</div>

				<nav className="footer__cols" aria-label="Footer">
					<div>
						<h4>Government</h4>
						<Link href="/government">Overview</Link>
						<Link href="/government/nalam-ai">Nalam AI</Link>
						<Link href="/government/ambient-listening">Ambient Listening</Link>
						<Link href="/government/dipr">DIPR Digitalisation</Link>
					</div>
					<div>
						<h4>Products</h4>
						<Link href="/healthcare">OHM</Link>
						<Link href="/platform">OHAI Platform</Link>
						<Link href="/technology">Technology</Link>
						<a href="https://ohm.doctor">ohm.doctor</a>
					</div>
					<div>
						<h4>Education</h4>
						<Link href="/education">AI for colleges</Link>
						<Link href="/education#onprem">On-prem</Link>
						<Link href="/education#cost">Cost model</Link>
					</div>
					<div>
						<h4>Company</h4>
						<Link href="/about">About</Link>
						<Link href="/newsroom">Newsroom</Link>
						<Link href="/contact">Contact</Link>
					</div>
					<div>
						<h4>Legal</h4>
						<Link href="/privacy">Privacy Policy</Link>
						<Link href="/terms">Terms &amp; Conditions</Link>
						<Link href="/privacy#dpdp">DPDP Act 2023</Link>
					</div>
				</nav>
			</div>

			<div className="shell footer__base">
				<span>Open Holistic AI Solutions Pvt Ltd © 2026 · Chennai, India</span>
				<span className="footer__mono">Built in India · Run in India</span>
			</div>
		</footer>
	);
}
