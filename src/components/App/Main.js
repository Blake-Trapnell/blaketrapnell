import { React } from "react";
import Starrynight from "../StarryNight/StarryNight.js";
import Home from "../Home/Home.js";
import About from "../About/About.js";
import Skills from "../Skills/Skills.js";
import "./Main.scss";

const Main = (props) => {
    
	return (
		<div className={"main--outer-container"}>
           {props.nav === "Home" && <Home/>} 
			{props.nav === "About" && <About/>}
			{props.nav === "Skills" && <Skills/>}
            <Starrynight>
            </Starrynight>
		</div>
	);
};

export default Main;
