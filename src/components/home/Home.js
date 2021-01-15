import React from "react";
import Main from "./Main.js";
import {useState} from "react";

import "./Home.scss";

const Home = () => {
    let [nav, setNav] = useState("about")
    console.log(nav)
    return (
        <div className={"home--outer-container"}>
        <nav className={"home--navigation-menu"}>
            <h2 onClick={()=>setNav("about")}>about</h2>
            <h2 onClick={()=>setNav("projects")}>projects</h2>
            <h2 onClick={()=>setNav("skills")}>skills</h2>
            <h2 onClick={()=>setNav("contact")}>contact</h2>
        </nav>
        <Main location={nav}/>
        </div>
    )
}

export default Home;