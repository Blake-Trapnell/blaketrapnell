import { React } from "react";
import Starrynight from "../StarryNight/StarryNight.js";
import Home from "../Home/Home.js";
import About from "../About/About.js";
import "./Main.scss";

const Main = (props) => {
    
	return (
		<div className={"main--outer-container"}>
			{console.log(props.nav)}
           {props.nav === "Home" && <Home/>} 
			{props.nav === "About" && <About/>}
            <Starrynight>
            </Starrynight>
		</div>
	);
};

export default Main;
