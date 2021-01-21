import React from "react";


import "./Home.scss"

const About = () => {
    
    return (
        <div className={"about--outer-container"}>
            <header>
                <h2 className={"blake-text"}>Blake Trapnell</h2>
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