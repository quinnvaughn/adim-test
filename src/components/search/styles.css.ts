import { style } from "@vanilla-extract/css";

export const input = style({
	padding: "8px",
	borderRadius: "4px",
	border: "1px solid lightgray",
	width: "100%",
});

export const container = style({
	display: "flex",
	gap: "4px",
});

export const button = style({
	backgroundColor: "rgb(246, 7, 78)",
	color: "white",
	padding: ".75em 1.5em",
	borderRadius: "4px",
	border: "none",
	cursor: "pointer",
	fontWeight: "bold",
});
