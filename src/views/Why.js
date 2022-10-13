import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Why(props) {
    return (
        <div className="__Why">
            <div className="title">
                Why Aegle Works{" "}
                <div className="tryItYourself">
                    <Link to="selectSimulation">Try it for yourself!</Link>
                </div>
            </div>
            <div className="subtitle">Savings from probable years in which # is claims is low more than offset the improbable "bad"</div>
            <div className="table-custom">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th># of Claims</th>
                            <th>Likelihood</th>
                            <th>Stop-loss</th>
                            <th>Aegle Approach</th>
                            <th>Aegle Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <Button className="claims">Few</Button>
                            </td>
                            <td>Most probable</td>
                            <td>
                                <Button className="stoploss">Upfront Premium</Button>
                            </td>
                            <td>
                                <span>On-Demand Financing</span>
                            </td>
                            <td className="aegleSavingsTD">
                                <span>Huge</span>
                                <span>30-80%+</span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <Button className="claims">Few</Button>
                            </td>
                            <td>Most probable</td>
                            <td>
                                <Button className="stoploss">Upfront Premium</Button>
                            </td>
                            <td>
                                <span>On-Demand Financing</span>
                            </td>
                            <td className="aegleSavingsTD">
                                <span>Huge</span>
                                <span>30-80%+</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <Button className="claims">Few</Button>
                            </td>
                            <td>Most probable</td>
                            <td>
                                <Button className="stoploss">Upfront Premium</Button>
                            </td>
                            <td>
                                <span>On-Demand Financing</span>
                            </td>
                            <td className="aegleSavingsTD">
                                <span>Huge</span>
                                <span>30-80%+</span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <Button className="claims">Few</Button>
                            </td>
                            <td>Most probable</td>
                            <td>
                                <Button className="stoploss">Upfront Premium</Button>
                            </td>
                            <td>
                                <span>On-Demand Financing</span>
                            </td>
                            <td className="aegleSavingsTD">
                                <span>Huge</span>
                                <span>30-80%+</span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                <Button className="claims">Few</Button>
                            </td>
                            <td>Most probable</td>
                            <td>
                                <Button className="stoploss">Upfront Premium</Button>
                            </td>
                            <td>
                                <span>On-Demand Financing</span>
                            </td>
                            <td className="aegleSavingsTD">
                                <span>Huge</span>
                                <span>30-80%+</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Why;
