import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Gif } from "../../types";

type State = {
	gifs: Gif[];
	loading: boolean;
	pfp: string;
	setGiphyData: (gifs: Gif[]) => void;
	setLoading: (loading: boolean) => void;
	setPfp: (pfp: string) => void;
};

export const useGifs = create(
	persist<State>(
		(set) => ({
			gifs: [],
			loading: false,
			pfp: "",
			setGiphyData: (gifs: Gif[]) => {
				set((s) => ({ ...s, gifs }));
			},
			setLoading: (loading: boolean) => {
				set((s) => ({ ...s, loading }));
			},
			setPfp: (pfp: string) => {
				set((s) => ({ ...s, pfp }));
			},
		}),
		{
			name: "gifs-storage",
			storage: createJSONStorage(() => sessionStorage),
			partialize: (s) => ({
				gifs: [],
				loading: false,
				pfp: s.pfp,
				setPfp: s.setPfp,
				setGiphyData: s.setGiphyData,
				setLoading: s.setLoading,
			}),
		},
	),
);
