import React from "react";
import anime from "animejs/lib/anime.es.js";

import "./About.scss"

const About = () => {

    const blakeToCircle = () => {
        const tl = anime.timeline({
            targets:[".blake-text", ".about--moon"]
        })
		tl.add({
            fontSize: 0,
            duration: 2000,
            opacity: 1,
        })
        .add({
            targets: ".about--moon",
            height: 100,
            width: 100,
            duration: 1000,
            top: 20,
            right: 20,
            opacity: 1
        })
        .add({
            targets: ".about--moon-crescent",
            height: 70,
            width: 70,
            top: 0,
            left: 35,
            opacity: 1,
            easing: "linear"
        })


    };
    
    return (
        <div className={"about--outer-container"}>
            <header>
                <h2 onClick={()=>blakeToCircle()} className={"blake-text"}>Blake Trapnell</h2>
                <div className={"about--moon"}>
                    <div className={"about--moon-crescent"}></div>
                </div>
            </header>
            <article>
                Hi i'm Blake, a web developer. I enjoy making fun, beautiful, interactive websites.
                </article>
        </div>
    )
}

export default About