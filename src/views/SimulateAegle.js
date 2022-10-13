import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import "./../style/SimulateAegle.scss";
import RangeSlider from "react-bootstrap-range-slider";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SimulateAegle(props) {
    const [value, setValue] = useState(0);
    return (
        <>
            <Navbar theme="light" />
            <div className="__SimulateAegle">
                <div className="top">
                    <h1>Don`t pay so much for risk management</h1>
                    <h3>Give us a spin; see how much Aegle could save your company</h3>
                </div>
                <div className="middle">
                    <span className="topSpan">Standard specific stop-loss simulator</span>
                    <div className="box">
                        <div className="one">
                            <div className="sign">
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip id="first">
                                            Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                        </Tooltip>
                                    }
                                >
                                    <span>Number of covered lives</span>
                                    {/* <span className="icon">i</span> */}
                                </OverlayTrigger>
                            </div>
                            <input type="number" className="input" value={value} />
                            <RangeSlider value={value} onChange={(changeEvent) => setValue(changeEvent.target.value)} />
                        </div>
                        <div className="one">
                            <div className="sign">
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip id="first">
                                            Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                        </Tooltip>
                                    }
                                >
                                    <span>Annual growth in covered lives (%)</span>
                                    {/* <span className="icon">i</span> */}
                                </OverlayTrigger>
                            </div>
                            <input type="number" className="input" value={value} />
                            <RangeSlider value={value} onChange={(changeEvent) => setValue(changeEvent.target.value)} />
                        </div>
                        <div className="one">
                            <div className="sign">
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip id="first">
                                            Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                        </Tooltip>
                                    }
                                >
                                    <span>Specific attachment point</span>
                                    {/* <span className="icon">i</span> */}
                                </OverlayTrigger>
                            </div>
                            <input type="number" className="input" value={value} />
                            <RangeSlider value={value} onChange={(changeEvent) => setValue(changeEvent.target.value)} />
                        </div>
                        <div className="one">
                            <div className="sign">
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip id="first">
                                            Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                        </Tooltip>
                                    }
                                >
                                    <span>Current annual stop-loss premium PEPM</span>
                                    {/* <span className="icon">i</span> */}
                                </OverlayTrigger>
                            </div>
                            <input type="number" className="input" value={value} />
                            <RangeSlider value={value} onChange={(changeEvent) => setValue(changeEvent.target.value)} />
                        </div>
                        <div className="twoWrapper">
                            <div className="two">
                                <span>Lasers and exclusions</span>
                                <div className="group">
                                    <span className="option active">No lasers</span>
                                    <span className="option">Average lasers</span>
                                </div>
                            </div>
                            <div className="two">
                                <span>Stop-loss pricing</span>
                                <div className="group">
                                    <span className="option ">Historical average</span>
                                    <span className="option active">Agressive</span>
                                </div>
                            </div>
                            <div className="two">
                                <span>Actuarial risk assumptions</span>
                                <div className="group">
                                    <span className="option active">Standard</span>
                                    <span className="option">Conservative</span>
                                </div>
                            </div>
                        </div>
                        <div className="one short">
                            <div className="sign">
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip id="first">
                                            Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                        </Tooltip>
                                    }
                                >
                                    <span>Future plan experience</span>
                                    {/* <span className="icon">i</span> */}
                                </OverlayTrigger>
                            </div>
                            <RangeSlider value={value} onChange={(changeEvent) => setValue(changeEvent.target.value)} />
                        </div>
                        <button
                            className="button"
                            onClick={() => {
                                alert("I`m clicked");
                            }}
                        >
                            Let`s run some simulations
                        </button>
                    </div>
                </div>
                <div className="end">
                    <span className="topSpan">Custom simulator</span>
                    <div className="box">
                        <span>Want a quote tailored to you or your client`s past experience?</span>
                        <p>
                            Fill out a more detailed form or upload your data, and we`ll come back to you with a full illustrative and
                            tear-sheet comparing Aegle to your current stop-loss vendor.
                        </p>
                        <button
                            className="button"
                            onClick={() => {
                                alert("I`m clicked");
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <Footer theme="dark" />
        </>
    );
}

export default SimulateAegle;
