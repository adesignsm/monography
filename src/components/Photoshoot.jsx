import React, {useState, useEffect, createElement} from "react";
import Webcam from "webcam-easy";

import RetryLogo from "../components/component_media/photoshoot_assets/Retry.svg";
import MonoLogo from "../components/component_media/photoshoot_assets/monoLogo.svg";
import "../components/component_styles/photoshoot.css";

let init_t, counter = 0, photoSetCounter = 0, currentPhotoPos = 0;
let photoStream, photoStreams = document.getElementsByClassName("photo-shot");

const Photoshoot = () => {
    const [retryState, setRetryState] = useState(false);
    const [shotTimer, setShotTimer] = useState(1);

    const addPhotoStream = () => {
        const photoStreamVideos = document.getElementsByClassName("photo-shot");

        const facingMode = "user";
        const constraints = {
            audio: false,
            video: {
                facingMode
            }
        }

        for (var i = 0; i < photoStreamVideos.length; i++) {
            photoStream = document.createElement("video");
            photoStream.className = "photo-stream";

            photoStream.setAttribute("playsinline", "");
            photoStream.setAttribute("autoplay", "");
            photoStream.setAttribute("muted", "");
            photoStream.style.height = "50%";
            photoStream.style.width = "50%";
    
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                photoStream.srcObject = stream;
            });
        }
    }

    const SnapShot = (currentPos) => {
        let photoCanvas = document.getElementById("photo-canvas");

        photoCanvas.getContext("2d").drawImage(photoStream, 0, 0, photoCanvas.width, photoCanvas.height);
        let photoURL = photoCanvas.toDataURL("image/jpeg");
        let photo = document.querySelectorAll(".photo-shot img");

        console.log(photo[currentPos]);
        photo[currentPos].src = photoURL;
    }

    useEffect(() => {
        addPhotoStream();
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
                        SnapShot(currentPhotoPos);
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
                    <canvas id = "photo-canvas"></canvas>
                    <ul>
                        <li className = "photo-shot"> <img className="photo"></img></li>
                        <li className = "photo-shot"> <img className="photo"></img></li>
                        <li className = "photo-shot"> <img className="photo"></img></li>
                        <li className = "photo-shot"> <img className="photo"></img></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Photoshoot;