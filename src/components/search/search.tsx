import { FormEvent, useState } from "react";
import { useGifs } from "../../hooks";
import { button, container, input } from "./styles.css";

export function Search() {
	const [search, setSearch] = useState("");
	const { setLoading, setGiphyData } = useGifs((s) => ({
		setLoading: s.setLoading,
		setGiphyData: s.setGiphyData,
	}));
	async function searchGiphy(e: FormEvent) {
		e.preventDefault();
		setLoading(true);
		const result = await fetch(
			`${process.env.NEXT_PUBLIC_GIPHY_API_URL}?${new URLSearchParams({
				api_key: process.env.NEXT_PUBLIC_GIPHY_API_KEY,
				q: search,
				limit: "12",
			}).toString()}`,
		);
		const data = await result.json();
		setGiphyData(data.data);
		setLoading(false);
	}
	return (
		<form onSubmit={searchGiphy}>
			<div className={container}>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={input}
					placeholder="Search for gifs..."
				/>
				<button type="submit" className={button}>
					Search
				</button>
			</div>
		</form>
	);
}
