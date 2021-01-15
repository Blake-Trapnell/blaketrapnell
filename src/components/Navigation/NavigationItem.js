import React from "react";

import "./NavigationItem.scss";

const NavigationItem = (props) => {
    console.log(props)
    return (
        <div onClick={props.navigate(props.title)} className={"navigation-item"}>
            <h2 className={"navigation-item--title"}>{props.title}</h2>
        </div>
    )
}

export default NavigationItem