export type Gif = {
	type: string;
	id: string;
	images: {
		fixed_height: {
			url: string;
		};
	};
	alt_text: string;
};
