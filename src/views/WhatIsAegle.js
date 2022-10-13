import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import "./../style/WhatIsAegle.scss";

function WhatIsAegle(props) {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const setTabs = (str) => {
        if (str === "first") {
            setFirst(!first);
        } else {
            setFirst(false);
        }
        if (str === "second") {
            setSecond(!second);
        } else {
            setSecond(false);
        }
        if (str === "third") {
            setThird(!third);
        } else {
            setThird(false);
        }
    };
    return (
        <>
            <Navbar theme="dark" />
            <div className="__WhatIsAegle">
                <h1>What is Aegle</h1>
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="__What__WhatIsAegle">
                <div className="wrapperMain">
                    <div className="left">
                        <h1>Benefits of Aegle</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque suspendisse augue bibendum donec ultrices.
                            Ac cras euismod lorem vulputate senectus. At posuere vel volutpat cursus. Facilisis neque sit quam mattis. Vel
                            ipsum quis erat amet, blandit. A quam morbi eleifend magna gravida. Eros, urna malesuada nunc amet ipsum. Sed
                            mi, gravida ornare velit varius eget amet. Urna tincidunt interdum convallis urna leo.
                        </p>
                    </div>
                    <div className="right">
                        <hr />
                        <div className="item">
                            <span className="number">1</span>
                            <p>Same cash flow protection as stop-loss against high cost claimants.</p>
                            <span
                                className="sign"
                                onClick={() => {
                                    setTabs("first");
                                }}
                            >
                                {first ? "+" : "-"}
                            </span>
                        </div>
                        <div className={`content ${first ? "active" : ""}`}>
                            <div className="chunk">
                                <h3>1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </p>
                            </div>{" "}
                            <div className="chunk">
                                <h3>1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <span className="number">2</span>
                            <p>Same cash flow protection as stop-loss against high cost claimants</p>
                            <span
                                className="sign"
                                onClick={() => {
                                    setTabs("second");
                                }}
                            >
                                {second ? "+" : "-"}
                            </span>
                        </div>
                        <div className={`content ${second ? "active" : ""}`}>
                            <div className="chunk">
                                <h3>1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </p>
                            </div>{" "}
                            <div className="chunk">
                                <h3>1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <span className="number">3</span>
                            <p>Same cash flow protection as stop-loss against high cost claimants</p>
                            <span
                                className="sign"
                                onClick={() => {
                                    setTabs("third");
                                }}
                            >
                                {third ? "+" : "-"}
                            </span>
                        </div>
                        <div className={`content ${third ? "active" : ""}`}>
                            <div className="chunk">
                                <h3>1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </p>
                            </div>{" "}
                            <div className="chunk">
                                <h3>1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <Footer theme="dark" />
        </>
    );
}

export default WhatIsAegle;
