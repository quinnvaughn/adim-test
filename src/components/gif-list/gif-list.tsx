import { match } from "ts-pattern";
import { useGifs } from "../../hooks";
import { Gif } from "../../types";
import { GifCard } from "../gif-card";
import { container } from "./styles.css";

export function GifList() {
	const { loading, gifs } = useGifs((s) => ({
		loading: s.loading,
		gifs: s.gifs,
	}));
	return match(loading)
		.with(true, () => <p>Loading...</p>)
		.with(false, () => (
			<div className={container}>
				{match(gifs)
					.when(
						(gifs) => gifs.length === 0,
						() => <p>No gifs found. Maybe try a different query.</p>,
					)
					.when(
						(gifs) => gifs.length > 0,
						(gifs) => gifs.map((gif) => <GifCard key={gif.id} gif={gif} />),
					)
					.run()}
			</div>
		))
		.run();
}
