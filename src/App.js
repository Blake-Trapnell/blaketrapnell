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
					<h2 id={nav === "Home" && "selected"} onClick={() => navigate("Home")}>Home</h2>
					<h2 id={nav === "About" && "selected"} onClick={() => navigate("About")}>About</h2>
					<h2 id={nav === "Projects" && "selected"} onClick={() => navigate("Projects")}>Projects</h2>
					<h2 id={nav === "Skills" && "selected"} onClick={() => navigate("Skills")}>Skills</h2>
					<h2 id={nav === "Contact" && "selected"} onClick={() => navigate("Contact")}>Contact</h2>
				</nav>
				<Main nav={nav} />
			</div>
			);
		</div>
	);
}

export default App;
