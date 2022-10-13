import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import SpinTab from "./../components/SpinTab";
import { Link } from "react-router-dom";
import "./../style/Home.scss";

function Home(props) {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const setTabs = (str) => {
        if (str === "first") {
            setFirst(true);
        } else {
            setFirst(false);
        }
        if (str === "second") {
            setSecond(true);
        } else {
            setSecond(false);
        }
        if (str === "third") {
            setThird(true);
        } else {
            setThird(false);
            // check
        }
    };
    return (
        <>
            <Navbar theme="dark" />
            <div className="__Home">
                <div className="mainWrapper">
                    <div className="lower">
                        <div className="wrapper">
                            <div className="left">
                                <div className="leftWrapper">
                                    <h1 className="heading">Stop-loss reinsurance hasn`t changed in decades.</h1>
                                    <h1 className="subheading">We are fixing that.</h1>
                                    <Link to="/requestPricing">
                                        <button className="button">Request Pricing</button>
                                    </Link>
                                    <Link to="/whatIsAegle">
                                        <button className="button empty">Learn More</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="right">
                                <img src="./homePageGraph.png" alt="homePageGraph" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="__What__Home">
                <div className="wrapperMain">
                    <div className="subtitle">Aegle converts the cost of healthcare risk into the cost of capital</div>
                    <div className="wrapperDisplay">
                        <div className="wrapperDrawer">
                            <div
                                onClick={() => {
                                    setTabs("first");
                                }}
                                className={`item ${first ? "active" : ""}`}
                            >
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/0deb/2b08/4a0f8bfe5ebd43e13747e6ef6b9f276b?Expires=1638748800&Signature=cYSsejFLfWGyNjFwZMhkkGW9KWd8WDrQi7~Fj42rwQh9gwOmzaQtBLwjYaPDNZRTmnvXGFx1zmk4fTo0RL3TIFsRAhpoPfLJHMSTYqPYcCb9qQJJnPcb96GSBlhtR8qzS9qpwAnfOd8RYuaki0U~nfvWkiiiOxKASiXoQzRXWldbP9CvgB6uy-DutjCxuC5GgDNnYXP8mpcaT4aK4OLqi5edTBo~tDlzJNjB55SlpSy0zFe1wWsTNHORXmalHriSFW6q-9z1SJt-DePsaLuH97CN4Y2iacj1w8l4-oxxayVrzQccUSEoRNunNGSVsCoSuL5TD5DbKytPFk0HmeXxSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                    alt="icon"
                                />
                                <h3>Financial Engineering instead of Insurance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    setTabs("second");
                                }}
                                className={`item ${second ? "active" : ""}`}
                            >
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/0deb/2b08/4a0f8bfe5ebd43e13747e6ef6b9f276b?Expires=1638748800&Signature=cYSsejFLfWGyNjFwZMhkkGW9KWd8WDrQi7~Fj42rwQh9gwOmzaQtBLwjYaPDNZRTmnvXGFx1zmk4fTo0RL3TIFsRAhpoPfLJHMSTYqPYcCb9qQJJnPcb96GSBlhtR8qzS9qpwAnfOd8RYuaki0U~nfvWkiiiOxKASiXoQzRXWldbP9CvgB6uy-DutjCxuC5GgDNnYXP8mpcaT4aK4OLqi5edTBo~tDlzJNjB55SlpSy0zFe1wWsTNHORXmalHriSFW6q-9z1SJt-DePsaLuH97CN4Y2iacj1w8l4-oxxayVrzQccUSEoRNunNGSVsCoSuL5TD5DbKytPFk0HmeXxSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                    alt="icon"
                                />
                                <h3>Financial Engineering instead of Insurance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    setTabs("third");
                                }}
                                className={`item ${third ? "active" : ""}`}
                            >
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/0deb/2b08/4a0f8bfe5ebd43e13747e6ef6b9f276b?Expires=1638748800&Signature=cYSsejFLfWGyNjFwZMhkkGW9KWd8WDrQi7~Fj42rwQh9gwOmzaQtBLwjYaPDNZRTmnvXGFx1zmk4fTo0RL3TIFsRAhpoPfLJHMSTYqPYcCb9qQJJnPcb96GSBlhtR8qzS9qpwAnfOd8RYuaki0U~nfvWkiiiOxKASiXoQzRXWldbP9CvgB6uy-DutjCxuC5GgDNnYXP8mpcaT4aK4OLqi5edTBo~tDlzJNjB55SlpSy0zFe1wWsTNHORXmalHriSFW6q-9z1SJt-DePsaLuH97CN4Y2iacj1w8l4-oxxayVrzQccUSEoRNunNGSVsCoSuL5TD5DbKytPFk0HmeXxSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                    alt="icon"
                                />
                                <h3>Financial Engineering instead of Insurance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="wrapperContent">
                            <div className={`item ${first ? "active" : ""}`}>
                                <div className="chunk">
                                    <h3>
                                        1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                            </div>

                            <div className={`item ${second ? "active" : ""}`}>
                                <div className="chunk">
                                    <h3>
                                        2nd Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                            </div>

                            <div className={`item ${third ? "active" : ""}`}>
                                <div className="chunk">
                                    <h3>
                                        3rd Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SpinTab />
            <Footer theme="dark" />
        </>
    );
}

export default Home;
