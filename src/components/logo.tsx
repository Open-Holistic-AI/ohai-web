/**
 * Open Holistic AI logo mark.
 * Ink ring (adapts to context via currentColor) = holistic wholeness;
 * teal orbit arc + node = the AI layer in motion. Palette-matched to the site.
 */
export function LogoMark({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 32 32"
			fill="none"
			aria-hidden="true"
		>
			<circle
				cx="16"
				cy="16"
				r="11"
				stroke="currentColor"
				strokeWidth="2.5"
				opacity="0.9"
			/>
			<path
				d="M16 5 A11 11 0 0 1 27 16"
				stroke="#1e6e7e"
				strokeWidth="2.6"
				strokeLinecap="round"
			/>
			<circle cx="16" cy="5" r="3.1" fill="#1e6e7e" />
		</svg>
	);
}

/** Full lockup: mark + wordmark, for nav and footer. */
export function Logo() {
	return (
		<span className="brand">
			<LogoMark className="brand__mark" />
			<span className="brand__name">
				Open&nbsp;Holistic&nbsp;AI<i>Sovereign&nbsp;AI</i>
			</span>
		</span>
	);
}
