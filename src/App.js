import React from "react";
import Main from "./components/App/Main";
import { useState } from "react";
import "./Home.scss";
import "./App.css";

function App() {
	let [nav, setNav] = useState("Home");
	const navigate = (location) => {
		setNav(location);
	};

	return (
		<div className="App">
			<div className={"home--outer-container"}>
				<nav className={"home--navigation-menu"}>
					<h2 onClick={() => navigate("Home")}>Home</h2>
					<h2 onClick={() => navigate("About")}>About</h2>
					<h2 onClick={() => navigate("Projects")}>Projects</h2>
					<h2 onClick={() => navigate("Skills")}>Skills</h2>
					<h2 onClick={() => navigate("Contact")}>Contact</h2>
				</nav>
				<Main nav={nav} />
			</div>
			);
		</div>
	);
}

export default App;
