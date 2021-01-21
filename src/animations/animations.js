import anime from "animejs/lib/anime.es.js";

const moonAnimation = () => {
	const toMoon = anime.timeline({
		targets: [".blake-text", ".about--moon"],
        duration: 1000,
		fontSize: 0,
		color: "#30084b",
		opacity: 1,
		width: 30,
	});
	toMoon.play()
};

export const blakeToMoon = (nav, prevNav) => {
	if (nav === "about") {
		moonAnimation()
	}
};

export const moonToBlake = (nav) => {
	if (nav === "home") {
		moonAnimation("reverse")
	}
};
