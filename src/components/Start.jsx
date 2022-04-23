import React, {useState, useEffect} from "react";
import MonoLogo from "./component_media/monologo.svg";
import "./component_styles/start.css";

const Start = () => {

    return (
        <React.Fragment>
            <div id = "start-page-container">
                <div id = "monography-intro-container">
                    <img alt = "intro" src = {MonoLogo} /> 
                    <h1> TOUCH THE SCREEN TO BEGIN </h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Start;