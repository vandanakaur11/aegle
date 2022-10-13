import React from "react";
import "./../style/SpinTab.scss";

function SpinTab(props) {
    return (
        <div className="__SpinTab">
            <h1>Don`t believe us? Give Aegle a spin</h1>
            <span>
                <button className="button dark">Simulate Aegle</button>
                <button className="button yellow">Request pricing</button>
            </span>
        </div>
    );
}

export default SpinTab;
