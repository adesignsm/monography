import React, {useEffect, useState} from "react";
import Photoshoot from "./Photoshoot";

import Card from "../components/component_media/payment_assets/card.svg";
import "../components/component_styles/payment.css"

const Payment = (selectionData) => {
    const [paymentPageState, setPaymentPageState] = useState(true);
    const [photoPageState, setPhotoPageState] = useState(false);
    const [dollarAmount, setDollarAmount] = useState(5.00);
    const [hasPaid, setHasPaid] = useState(false);

    useEffect(() => {
        const frameQty = parseFloat(selectionData.frameData);
        
        if (frameQty === 2) {
            setDollarAmount(5.00);
        } else if (frameQty === 4) {
            setDollarAmount(7.50);
        } else if (frameQty === 6) {
            setDollarAmount(10.00);
        } else if (frameQty === 8) {
            setDollarAmount(12.50);
        }

        setHasPaid(true); //test
    }, []);

    //PAYMENT SCRIPT GOES HERE

    return (
        <React.Fragment>
            {paymentPageState === true &&
                <div id = "payment-container">
                    <div id = "payment-total">
                        <h1> YOUR TOTAL: {dollarAmount ? <span> ${dollarAmount.toFixed(2)} </span> : <span> $5.00 </span>} </h1>
                        <img alt = "card image" src = {Card} />
                        <h1> PLEASE TAP TO PAY </h1>
                    </div>

                    <div id = "details">
                        <h2> Frame amount: {selectionData.frameData} strips </h2>
                        <h2> Frame colour: {selectionData.colorData} </h2> 
                    </div>

                    <button id = "test-button" onTouchStart={(e) => { //test
                        setHasPaid(true)
                        setPaymentPageState(false);
                        setPhotoPageState(true);
                        console.log("paid", hasPaid)
                        console.log("payState", paymentPageState)
                        console.log("photoState", photoPageState)
                    }}> TEST BUTTON </button>
                </div>
            }

            {photoPageState ? <Photoshoot /> : null}
        </React.Fragment>
    )
}

export default Payment;