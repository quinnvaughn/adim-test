import { style } from "@vanilla-extract/css";

export const pageContainer = style({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	width: "100%",
	height: "100%",
});

export const innerContainer = style({
	maxWidth: "600px",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
});
