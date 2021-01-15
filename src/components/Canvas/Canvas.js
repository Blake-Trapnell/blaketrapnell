import React, { useRef, useEffect } from "react";
import "./Canvas.scss";

const Canvas = (props) => {
	const canvasRef = useRef(null);
	let meteors = { dy: 0, y: 500, x: 500, stop: 80 * Math.random() + 50 };
	let meteorImg = new Image();
	meteorImg.src = "Meteor_large.png";

	const drawMeteors = (ctx) => {
		ctx.drawImage(meteorImg, 0, 0);
	};

	const drawMountains = (ctx) => {
    ctx.beginPath()
    ctx.fillStyle = "#bbbb"
    ctx.moveTo(ctx.canvas.width * .8, ctx.canvas.height - 50)
    ctx.lineTo(ctx.canvas.width * .9, ctx.canvas.height * .8)
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height - 50)
    ctx.closePath()
    ctx.fill()
	};
	const drawRoad = (ctx) => {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, ctx.canvas.height, ctx.canvas.width, -50);
		for (let i = 0; i < ctx.canvas.width; i += 60) {
			ctx.fillStyle = "#CAC000";
			ctx.fillRect(
				i,
				ctx.canvas.height - 30,
				i + 30,
				ctx.canvas.height - 10
			);
		}
	};

	const draw = (ctx) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		drawMountains(ctx);
		drawRoad(ctx);
		drawMeteors(ctx);
	};

	const getPixelRatio = (ctx) => {
		var backingStore =
			ctx.backingStorePixelRatio ||
			ctx.webkitBackingStorePixelRatio ||
			ctx.mozBackingStorePixelRatio ||
			ctx.msBackingStorePixelRatio ||
			ctx.oBackingStorePixelRatio ||
			ctx.backingStorePixelRatio ||
			1;

		return (window.devicePixelRatio || 1) / backingStore;
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let ratio = getPixelRatio(ctx);
		let width = getComputedStyle(canvas)
			.getPropertyValue("width")
			.slice(0, -2);
		let height = getComputedStyle(canvas)
			.getPropertyValue("height")
			.slice(0, -2);
		canvas.width = width * ratio;
		canvas.height = height * ratio;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		let frameCount = 0;
		let animationFrameId = null;
		meteors.x = meteors.x * canvas.width;

		//Our drawMeteors came here
		const render = () => {
			frameCount++;
			draw(ctx);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return (
		<canvas className={"home--canvas"} ref={canvasRef} {...props}>
			{props.children}
		</canvas>
	);
};

export default Canvas;
