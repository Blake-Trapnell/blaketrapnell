import React from "react";
import Canvas from "../Canvas/Canvas.js";

import "./Home.scss";

const Home = () => {
    return (
        <header className={"home--header"}>
            <Canvas/>
            <h1>Hello</h1>
        </header>
    )
}

export default Home;