import { style } from "@vanilla-extract/css";

export const container = style({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	maxWidth: "800px",
});
