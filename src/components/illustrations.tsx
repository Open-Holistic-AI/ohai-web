/**
 * On-brand inline-SVG product mockups used to fill the split media panels.
 * No external assets, licensing-safe, crisp at any size, palette-matched
 * (ink #12343b, teal #1e6e7e, mist #d7e8e6, lav #ddd6fb, green #25a56a).
 */

const CARD = "#ffffff";
const INK = "#12343b";
const TEAL = "#1e6e7e";
const MIST = "#d7e8e6";
const LINE = "#c7d6d6";
const GREEN = "#25a56a";

const wrap = "split__mock";

/* Nalam AI — WhatsApp-style appointment chat */
export function MockChat() {
	return (
		<svg className={wrap} viewBox="0 0 380 300" role="img" aria-label="Appointment booked on WhatsApp">
			<rect x="30" y="10" width="320" height="280" rx="22" fill={CARD} />
			{/* header */}
			<rect x="30" y="10" width="320" height="52" rx="22" fill={TEAL} />
			<rect x="30" y="40" width="320" height="22" fill={TEAL} />
			<circle cx="60" cy="36" r="13" fill="#fff" opacity="0.9" />
			<circle cx="60" cy="30" r="3" fill={TEAL} />
			<circle cx="60" cy="40" r="6" fill="none" stroke={TEAL} strokeWidth="2" />
			<rect x="82" y="28" width="90" height="7" rx="3.5" fill="#fff" />
			<rect x="82" y="41" width="60" height="5" rx="2.5" fill="#fff" opacity="0.6" />
			{/* incoming bubble */}
			<rect x="50" y="82" width="180" height="40" rx="12" fill="#eef2f2" />
			<rect x="64" y="94" width="150" height="6" rx="3" fill={LINE} />
			<rect x="64" y="106" width="96" height="6" rx="3" fill={LINE} />
			{/* outgoing bubble */}
			<rect x="150" y="134" width="180" height="30" rx="12" fill={MIST} />
			<rect x="166" y="146" width="120" height="6" rx="3" fill={TEAL} opacity="0.55" />
			{/* incoming bubble */}
			<rect x="50" y="176" width="150" height="30" rx="12" fill="#eef2f2" />
			<rect x="64" y="188" width="110" height="6" rx="3" fill={LINE} />
			{/* confirmation bubble */}
			<rect x="118" y="218" width="212" height="56" rx="14" fill="#e7f6ee" />
			<circle cx="146" cy="246" r="15" fill={GREEN} />
			<path d="M139 246l5 5 9-10" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
			<rect x="170" y="234" width="130" height="7" rx="3.5" fill={INK} opacity="0.85" />
			<rect x="170" y="250" width="96" height="6" rx="3" fill={INK} opacity="0.4" />
		</svg>
	);
}

/* Ambient Listening / OHM — voice waveform → structured note */
export function MockWaveform() {
	const bars = [14, 26, 40, 30, 52, 34, 60, 44, 28, 48, 36, 22, 44, 30, 16];
	return (
		<svg className={wrap} viewBox="0 0 380 300" role="img" aria-label="Speech turned into a structured clinical note">
			<rect x="24" y="14" width="332" height="272" rx="20" fill={CARD} />
			{/* mic chip */}
			<circle cx="58" cy="52" r="16" fill={MIST} />
			<rect x="53" y="43" width="10" height="16" rx="5" fill={TEAL} />
			<path d="M48 53a10 10 0 0 0 20 0" fill="none" stroke={TEAL} strokeWidth="2.4" />
			<rect x="84" y="46" width="120" height="7" rx="3.5" fill={INK} opacity="0.8" />
			<rect x="84" y="59" width="70" height="5" rx="2.5" fill={INK} opacity="0.35" />
			{/* waveform */}
			{bars.map((h, i) => (
				<rect
					key={i}
					x={44 + i * 20}
					y={104 - h / 2}
					width="8"
					height={h}
					rx="4"
					fill={i % 3 === 0 ? TEAL : "#7bb3ba"}
				/>
			))}
			{/* divider */}
			<line x1="44" y1="150" x2="336" y2="150" stroke={LINE} strokeWidth="1.5" />
			{/* structured note */}
			<rect x="44" y="168" width="66" height="7" rx="3.5" fill={TEAL} />
			<rect x="44" y="184" width="250" height="6" rx="3" fill={LINE} />
			<rect x="44" y="198" width="210" height="6" rx="3" fill={LINE} />
			<rect x="44" y="220" width="66" height="7" rx="3.5" fill={TEAL} />
			<rect x="44" y="236" width="270" height="6" rx="3" fill={LINE} />
			<rect x="44" y="250" width="180" height="6" rx="3" fill={LINE} />
		</svg>
	);
}

/* DIPR — files digitised with status ticks + 100% */
export function MockFiles() {
	const rows = [0, 1, 2];
	return (
		<svg className={wrap} viewBox="0 0 380 300" role="img" aria-label="Department files digitised end to end">
			<rect x="24" y="14" width="332" height="272" rx="20" fill={CARD} />
			<rect x="44" y="40" width="150" height="8" rx="4" fill={INK} opacity="0.8" />
			{rows.map((r) => {
				const y = 78 + r * 52;
				return (
					<g key={r}>
						<rect x="44" y={y} width="292" height="40" rx="10" fill="#f3f6f6" />
						{/* doc icon */}
						<rect x="58" y={y + 9} width="18" height="22" rx="3" fill="#fff" stroke={TEAL} strokeWidth="2" />
						<path d={`M70 ${y + 9} v6 h6`} fill="none" stroke={TEAL} strokeWidth="2" />
						<rect x="92" y={y + 13} width="150" height="6" rx="3" fill={LINE} />
						<rect x="92" y={y + 24} width="96" height="5" rx="2.5" fill={LINE} />
						{/* check */}
						<circle cx="312" cy={y + 20} r="13" fill={GREEN} />
						<path d={`M305 ${y + 20}l5 5 9-10`} fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
					</g>
				);
			})}
			{/* progress */}
			<rect x="44" y="248" width="230" height="10" rx="5" fill="#e4ecec" />
			<rect x="44" y="248" width="230" height="10" rx="5" fill={TEAL} />
			<text x="292" y="257" fontFamily="JetBrains Mono, monospace" fontSize="16" fontWeight="600" fill={INK}>100%</text>
		</svg>
	);
}

/* Education / sovereignty — data stays on your own servers */
export function MockShield() {
	return (
		<svg className={wrap} viewBox="0 0 380 300" role="img" aria-label="Data stays on your own on-prem servers">
			<rect x="24" y="14" width="332" height="272" rx="20" fill={CARD} />
			{/* server rack */}
			<rect x="52" y="150" width="120" height="104" rx="12" fill="#f3f6f6" stroke={LINE} strokeWidth="1.5" />
			{[0, 1, 2].map((i) => (
				<g key={i}>
					<rect x="66" y={166 + i * 28} width="92" height="18" rx="5" fill="#fff" stroke={LINE} strokeWidth="1.5" />
					<circle cx="78" cy={175 + i * 28} r="3.5" fill={i === 0 ? GREEN : TEAL} />
					<rect x="90" y={172 + i * 28} width="52" height="5" rx="2.5" fill={LINE} />
				</g>
			))}
			{/* shield with lock */}
			<path d="M256 52l58 20v46c0 40-28 62-58 74-30-12-58-34-58-74V72z" fill={MIST} stroke={TEAL} strokeWidth="3" />
			<rect x="238" y="120" width="36" height="30" rx="6" fill={TEAL} />
			<path d="M244 120v-8a12 12 0 0 1 24 0v8" fill="none" stroke={TEAL} strokeWidth="4" />
			<circle cx="256" cy="134" r="4.5" fill="#fff" />
			<rect x="254" y="134" width="4" height="9" rx="2" fill="#fff" />
			{/* label line */}
			<rect x="196" y="212" width="128" height="7" rx="3.5" fill={INK} opacity="0.75" />
			<rect x="196" y="228" width="92" height="6" rx="3" fill={INK} opacity="0.35" />
		</svg>
	);
}

/* Technology — the sovereign stack (4 layers) */
export function MockStack() {
	const layers = [
		{ label: "Dataset", fill: MIST, text: INK },
		{ label: "Model", fill: "#bfe0e3", text: INK },
		{ label: "Silicon", fill: TEAL, text: "#fff" },
		{ label: "Outcome", fill: INK, text: "#fff" },
	];
	return (
		<svg className={wrap} viewBox="0 0 380 300" role="img" aria-label="The sovereign stack: dataset, model, silicon, outcome">
			<rect x="24" y="14" width="332" height="272" rx="20" fill={CARD} />
			{layers.map((l, i) => {
				const y = 44 + i * 56;
				return (
					<g key={l.label}>
						<rect x="48" y={y} width="284" height="44" rx="11" fill={l.fill} />
						<text
							x="70"
							y={y + 28}
							fontFamily="JetBrains Mono, monospace"
							fontSize="15"
							fontWeight="500"
							fill={l.text}
						>
							{`0${i + 1}  ${l.label}`}
						</text>
						<circle cx="308" cy={y + 22} r="6" fill={l.text} opacity={l.text === "#fff" ? 0.85 : 0.5} />
					</g>
				);
			})}
		</svg>
	);
}
