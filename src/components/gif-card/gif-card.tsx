import { useState } from "react";
import { useGifs } from "../../hooks";
import { Gif } from "../../types";
import { button, image } from "./styles.css";

export function GifCard({ gif }: { gif: Gif }) {
	const { setPfp } = useGifs((s) => ({ setPfp: s.setPfp }));
	return (
		<button
			type="button"
			onClick={() => {
				setPfp(gif.images.fixed_height.url);
			}}
			className={button}
		>
			<img
				src={gif.images.fixed_height.url}
				alt={gif.alt_text}
				className={image}
			/>
		</button>
	);
}
