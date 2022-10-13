import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import NavbarGap from "./../components/NavbarGap";
function Processing(props) {
    let initialTime = 45;
    const [progress, setProgress] = useState(0);
    const timerRef = useRef(initialTime);
    const history = useHistory();
    useEffect(() => {
        setInterval(() => {
            if (timerRef.current === 0) {
                history.push("/customSimulation");
            }
            setTimer(timerRef.current - 1);
            setProgress(Math.round((100 / 45) * (initialTime - timerRef.current)));
        }, 1000);
    }, []);

    const setTimer = (value) => {
        timerRef.current = value;
    };
    return (
        <>
            <NavbarGap />
            <div className="__Processing">
                <div className="wrapper">
                    <span className="title-wbg">Please wait while we calculate your savings.</span>
                    <div className="message">
                        Did you know that Aegle's model was first developed in 2011 and has been executed 11 times by one of the largest US
                        health plans?
                    </div>
                    <img src="https://miro.medium.com/max/1152/1*d4zkPDg9EmViFVWR1YwBtg.gif" alt="gif" />
                    <progress
                        value={progress}
                        max="100"
                        data-complete={`${progress}% Complete`}
                        data-left={`est 00:${timerRef.current} remaining`}
                    ></progress>
                </div>
            </div>
        </>
    );
}

export default Processing;
