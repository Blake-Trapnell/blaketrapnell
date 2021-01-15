import { React } from "react";
import Starrynight from "../StarryNight/StarryNight.js";
import About from "../About/About.js";
import "./Main.scss";

const Main = (props) => {
    
	return (
		<div className={"main--outer-container"}>
            <About/>
            <Starrynight>
            </Starrynight>
		</div>
	);
};

export default Main;
