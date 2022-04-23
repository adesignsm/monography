import React, {useState, useEffect} from "react";

import "./component_styles/selection.css";

//frame qty icons
import TwoQty from "./component_media/selection_assets/2qty.svg";
import FourQty from "./component_media/selection_assets/4qty.svg";
import SixQty from "./component_media/selection_assets/6qty.svg";
import EightQty from "./component_media/selection_assets/8qty.svg";

//frame colour icons
import ColorOne from "./component_media/selection_assets/color1.svg";
import ColorTwo from "./component_media/selection_assets/color2.svg";
import ColorThree from "./component_media/selection_assets/color3.svg";
import ColorFour from "./component_media/selection_assets/color4.svg";

const Selection = () => {

    const [frameSelect, setFrameSelect] = useState([]);
    const [colorSelect, setColorSelect] = useState([]);

    useEffect(() => {
        setFrameSelect("");
        setColorSelect("");
    }, []);

    const frameCountHandler = (event) => {
        setFrameSelect(event.target.id);
        console.log(frameSelect);
    }

    const ColorSelectHandler = (event) => {
        setColorSelect(event.target.id);
        console.log(colorSelect);
    }

    return (
        <React.Fragment>
            <div id = "selection-container">
                <div id = "frame-count-container">
                    <h1> CHOOSE STRIP QUANTITTY </h1>
                    <ul>
                        <li className = "_cricle-option" onTouchStart={(event) => {frameCountHandler(event)}}> <img  id = "2qty"src = {TwoQty} /> </li>
                        <li className = "_cricle-option" onTouchStart={(event) => {frameCountHandler(event)}}> <img id = "4qty" src = {FourQty} /> </li>
                        <li className = "_cricle-option" onTouchStart={(event) => {frameCountHandler(event)}}> <img id = "6qty" src = {SixQty} /> </li>
                        <li className = "_cricle-option" onTouchStart={(event) => {frameCountHandler(event)}}> <img id = "8qty" src = {EightQty} /> </li>
                    </ul>
                </div>

                <div id = "frame-color-container">
                    <h1> CHOOSE FRAME COLOUR </h1>
                    <ul>
                        <li className = "__cricle-option" onTouchStart={(event) => {ColorSelectHandler(event)}}> <img id = "color1" src = {ColorOne} /> </li>
                        <li className = "__cricle-option" onTouchStart={(event) => {ColorSelectHandler(event)}}> <img id = "color2" src = {ColorTwo} /> </li>
                        <li className = "__cricle-option" onTouchStart={(event) => {ColorSelectHandler(event)}}> <img id = "color3" src = {ColorThree} /> </li>
                        <li className = "__cricle-option" onTouchStart={(event) => {ColorSelectHandler(event)}}> <img id = "color4" src = {ColorFour} /> </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Selection;