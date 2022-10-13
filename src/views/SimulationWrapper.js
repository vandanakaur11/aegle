import React from "react";
import { Button } from "react-bootstrap";
import NavbarGap from "./../components/NavbarGap";
import { Link } from "react-router-dom";

function SimulationWrapper(props) {
    return (
        <>
            <NavbarGap />
            <div className="__SimulationWrapper">
                <div className="title-wbg">Don`t pay so much for risk management</div>
                <div className="subtitle-wbg">Give us a spin; see how much Aegle could save your company</div>
                <div className="wrapper">
                    <div className="first">
                        <span>Standard Speific Stoploss Simulator</span>
                        <table>
                            <tr>
                                <td>Number of Covered Lives</td>
                                <td>500; 750; 1000; 2000; 5000; 10000; 50000;</td>
                            </tr>
                            <tr>
                                <td>Annual Growth in Covered Lives</td>
                                <td>0%, 2%, 5%</td>
                            </tr>
                            <tr>
                                <td>Specific Attachment Point</td>
                                <td>None, $50K, $100K, $150k</td>
                            </tr>
                            <tr>
                                <td>Current Annual Stop-Loss Premium PEPM (best guess OK)</td>
                                <td>Text input: $__.__ ($nnn.n)</td>
                            </tr>
                            <tr>
                                <td>Lasers & Exclusions</td>
                                <td>No Lasers/ Average Lasers</td>
                            </tr>
                            <tr>
                                <td>Lasers & Exclusions</td>
                                <td>No Lasers/ Average Lasers</td>
                            </tr>
                            <tr>
                                <td>Lasers & Exclusions</td>
                                <td>No Lasers/ Average Lasers</td>
                            </tr>
                        </table>
                        <Link to="normalSimulation">Let`s run some simulations!</Link>
                    </div>
                    <div className="second">
                        <span>Custom Simulator</span>
                        <p>
                            Want a quote tailored to you or your client`s past experience? Fill out a more detailed form or upload your
                            data, and we`ll come back to you with a full illustrative and tear-sheet comparing Aegle to your current
                            stop-loss vendor.
                        </p>
                        <Link to="processSimulation">Request custom simulations</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SimulationWrapper;
