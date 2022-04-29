import React, {useState, useEffect} from "react";
import Payment from "./Payment";

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

let t;

const Selection = () => {
    const [selectionPageState, setSelectionPageState] = useState(true);
    const [paymentPageState, setPaymentPageState] = useState(false);
    
    const [frameSelect, setFrameSelect] = useState("");
    const [colorSelect, setColorSelect] = useState("");

    useEffect(() => {
        return;
    }, [colorSelect, frameSelect]);

    t = setInterval(() => {
        // console.log(frameSelect);
        // console.log(colorSelect);

        if (frameSelect.length > 0 && colorSelect.length > 1) {
            setPaymentPageState(true);
            setSelectionPageState(false);
        }

        // console.log(paymentPageState);
    }, 1000);

    return (
        <React.Fragment>
            {selectionPageState === true &&
            
                <div id = "selection-container">
                    <div id = "frame-count-container">
                        <h1> CHOOSE STRIP QUANTITTY </h1>
                        <ul>
                            <li className = "_cricle-option"> <img alt = "2 strips" id = "2" src = {TwoQty} onTouchStart={(e) => {setFrameSelect(e.target.id)}} /> </li>
                            <li className = "_cricle-option"> <img alt = "4 strips" id = "4" src = {FourQty} onTouchStart={(e) => {setFrameSelect(e.target.id)}}/> </li>
                            <li className = "_cricle-option"> <img alt = "6 strips" id = "6" src = {SixQty} onTouchStart={(e) => {setFrameSelect(e.target.id)}}/> </li>
                            <li className = "_cricle-option"> <img alt = "8 strips" id = "8" src = {EightQty} onTouchStart={(e) => {setFrameSelect(e.target.id)}}/> </li>
                        </ul>
                    </div>

                    <div id = "frame-color-container">
                        <h1> CHOOSE FRAME COLOUR </h1>
                        <ul>
                            <li className = "__cricle-option"> <img alt = "colour 1" id = "red" src = {ColorOne} onTouchStart={(e) => {setColorSelect(e.target.id)}}/> </li>
                            <li className = "__cricle-option"> <img alt = "colour 2" id = "blue" src = {ColorTwo} onTouchStart={(e) => {setColorSelect(e.target.id)}}/> </li>
                            <li className = "__cricle-option"> <img alt = "colour 3" id = "green" src = {ColorThree} onTouchStart={(e) => {setColorSelect(e.target.id)}}/> </li>
                            <li className = "__cricle-option"> <img alt = "colour 4" id = "yellow" src = {ColorFour} onTouchStart={(e) => {setColorSelect(e.target.id)}}/> </li>
                        </ul>
                    </div>
                </div>
            }
            
            {paymentPageState ? <Payment frameData = {frameSelect} colorData = {colorSelect}/>: null}
        </React.Fragment>
    )
}

export default Selection;