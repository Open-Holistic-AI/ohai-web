import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT = "Open Holistic AI — Sovereign AI for governments, hospitals & education";

/**
 * Branded 1200×630 Open Graph image, rendered to PNG at build time.
 * Palette-matched (navy → teal), with the logo lockup, an eyebrow and a title.
 */
export function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "72px 80px",
					background:
						"linear-gradient(135deg, #0b1d22 0%, #12343b 52%, #1e6e7e 128%)",
					color: "#ffffff",
					fontFamily: "sans-serif",
				}}
			>
				{/* accent glow */}
				<div
					style={{
						position: "absolute",
						top: -160,
						right: -120,
						width: 520,
						height: 520,
						borderRadius: "50%",
						background:
							"radial-gradient(closest-side, rgba(143,208,214,0.35), rgba(143,208,214,0))",
						display: "flex",
					}}
				/>

				{/* brand lockup */}
				<div style={{ display: "flex", alignItems: "center", gap: 22 }}>
					<div
						style={{
							width: 58,
							height: 58,
							borderRadius: "50%",
							border: "5px solid #d7e8e6",
							position: "relative",
							display: "flex",
						}}
					>
						<div
							style={{
								width: 16,
								height: 16,
								borderRadius: "50%",
								background: "#8fd0d6",
								position: "absolute",
								top: -6,
								left: 21,
							}}
						/>
					</div>
					<div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>
						Open Holistic AI
					</div>
				</div>

				{/* eyebrow + title */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							fontSize: 24,
							letterSpacing: 5,
							textTransform: "uppercase",
							color: "#8fd0d6",
							marginBottom: 26,
						}}
					>
						{eyebrow}
					</div>
					<div
						style={{
							fontSize: 68,
							fontWeight: 600,
							lineHeight: 1.05,
							letterSpacing: -1.6,
							maxWidth: 1000,
						}}
					>
						{title}
					</div>
				</div>

				{/* footer */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						fontSize: 22,
						color: "rgba(255,255,255,0.72)",
					}}
				>
					<div>Sovereign AI · Built in India, run in India</div>
					<div>Backed by IIT Madras &amp; Intel</div>
				</div>
			</div>
		),
		{ ...OG_SIZE },
	);
}
