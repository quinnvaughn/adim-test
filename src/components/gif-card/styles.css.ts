import { style } from "@vanilla-extract/css";

export const button = style({
	padding: "0",
	border: "none",
	background: "none",
	cursor: "pointer",
	display: "block",
	width: "100%",
	height: "100%",
});

export const image = style({
	backgroundColor: "gray",
	width: "100%",
	height: "100%",
	flex: 1,
	":hover": {
		filter: "brightness(0.8)",
	},
});
