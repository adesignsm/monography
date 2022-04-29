import React, { useState, useEffect } from "react";
import Start from "./components/Start";
import Selection from "./components/Selection";

const App = () => {

    const [startPageState, setStartPageState] = useState(true);
    const [selectionPageState, setSelectionPageState] = useState(false);
    const [PHOTO_PROPS, SET_PHOTO_PROPS] = useState([]);

    useEffect(() => {
        setStartPageState(true);
    }, []);

    window.ontouchstart = (_event) => {
        setStartPageState(false);
        setSelectionPageState(true);
    }

    return (
        <React.Fragment>
            <div id = "wrapper">
                {startPageState ? <Start /> : null}
                {selectionPageState ? <Selection /> : null}
            </div>
        </React.Fragment>
    )
}

export default App;