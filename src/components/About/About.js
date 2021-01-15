import React from "react";
import anime from "animejs/lib/anime.es.js";

import "./About.scss"

const About = () => {

    const blakeToCircle = () => {
        const tl = anime.timeline({
            targets:[".blake-text"]
        })
		tl.add({
            fontSize: 0,
			easing: "linear",
			delay: (el, i) => 50 * i,
        })
    };
    
    return (
        <div className={"about--outer-container"}>
            <header>
                <h2 onClick={()=>blakeToCircle()} className={"blake-text"}>Blake Trapnell</h2>
            </header>
            <article>
                Hi i'm Blake, a web developer. I enjoy making fun, beautiful, interactive websites.
                </article>
        </div>
    )
}

export default About