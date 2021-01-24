import React from "react";

import "./Card.scss";

const Card = (props) => {
	return (
		<div class="flip-card">
			<div class="flip-card-inner">
				<div style={{background: "rgba(230, 197, 11, 0.5)"}} class="flip-card-front">
					<img class={"flip-card-logo"} src={"/images/JS5logo.png"}></img>
				</div>
				<div class="flip-card-back">
					<h1>John Doe</h1>
					<p>Architect & Engineer</p>
					<p>We love that guy</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
