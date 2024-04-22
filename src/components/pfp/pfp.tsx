import { match } from "ts-pattern";
import { useGifs } from "../../hooks";
import { container, image } from "./styles.css";

export function ProfilePicture() {
	const pfp = useGifs((s) => s.pfp);

	return (
		<div className={container}>
			{match(pfp)
				.when(
					(p) => p.length === 0,
					() => <p>Click on a gif to set your profile picture</p>,
				)
				.otherwise((p) => (
					<img className={image} src={p} alt="User profile" />
				))}
		</div>
	);
}
