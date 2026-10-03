"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<html lang="en">
			<body
				style={{
					margin: 0,
					minHeight: "100vh",
					display: "grid",
					placeItems: "center",
					padding: "24px",
					boxSizing: "border-box",
					background: "#f8fafc",
					color: "#0f172a",
					fontFamily: "system-ui, -apple-system, sans-serif",
				}}
			>
				<main
					role="alert"
					style={{
						width: "100%",
						maxWidth: "520px",
						padding: "40px 32px",
						textAlign: "center",
						background: "#ffffff",
						border: "1px solid #e2e8f0",
						borderRadius: "16px",
						boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
					}}
				>
					<div aria-hidden="true" style={{ fontSize: "3rem", marginBottom: "16px" }}>
						⚠️
					</div>
					<h1 style={{ margin: "0 0 12px", fontSize: "1.75rem" }}>
						Something went wrong
					</h1>
					<p style={{ margin: "0 0 28px", color: "#475569", lineHeight: 1.6 }}>
						An unexpected error occurred. Please try again, or return to the
						page later.
					</p>
					<button
						type="button"
						onClick={() => reset()}
						style={{
							border: 0,
							borderRadius: "8px",
							padding: "12px 20px",
							background: "#2563eb",
							color: "white",
							cursor: "pointer",
							fontSize: "1rem",
							fontWeight: 600,
						}}
					>
						Try again
					</button>
				</main>
			</body>
		</html>
	);
}
