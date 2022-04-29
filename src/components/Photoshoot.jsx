import React, {useState, useEffect} from "react";

import RetryLogo from "../components/component_media/photoshoot_assets/Retry.svg";
import MonoLogo from "../components/component_media/photoshoot_assets/monoLogo.svg";
import "../components/component_styles/photoshoot.css";

let init_t, counter = 0, photoSetCounter = 0, currentPhotoPos = 0;
let photoArray = document.getElementsByClassName("photo-shot");

const Photoshoot = () => {
    const [retryState, setRetryState] = useState(false);
    const [shotTimer, setShotTimer] = useState(1);

    useEffect(() => {
        setRetryState(false);
        if (retryState === false)  {
            init_t = setInterval(() => {
                counter++;
                setShotTimer(counter + 1);

                if (counter >= 7) {
                    counter = 0;
                    setShotTimer(counter);
    
                    if (photoSetCounter <= 3) {
                        photoSetCounter++;
                        currentPhotoPos = photoSetCounter - 1;
                        photoArray[currentPhotoPos].style.backgroundColor = "#000";
                    }
    
                    if (photoSetCounter >= 4)  {
                        clearInterval(init_t);
                    }
                    // console.log(photoArray[photoSetCounter - 1]);
                    console.log(currentPhotoPos);
                }
            }, 1000);
        } else {
            return () => clearInterval(init_t);
        }

    }, [retryState]);

    return (
        <React.Fragment>
            <header id = "photoshoot-header">
                <img id = "retry-logo" alt = "retry counter" src = {RetryLogo} />
            </header>

            <div id = "photoshoot-content">
                <div id = "timer-circle"> 
                    {shotTimer ? <h1> {shotTimer} </h1> : <img alt = "mono logo" src = {MonoLogo} />}
                </div>
                <div id = "photo-array">
                    <ul>
                        <li><div className="photo-shot"> 1 </div></li>
                        <li><div className="photo-shot"> 2 </div></li>
                        <li><div className="photo-shot"> 3 </div></li>
                        <li><div className="photo-shot"> 4 </div></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Photoshoot;