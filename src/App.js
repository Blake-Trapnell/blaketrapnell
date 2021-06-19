import React from "react";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
// import Contact from "./components/contact.js;"
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
				<div className={"home--content"}>
					<Home></Home>
					<About></About>
					<Skills></Skills>
				</div>
			</div>
			);
		</div>
	);
}

export default App;
