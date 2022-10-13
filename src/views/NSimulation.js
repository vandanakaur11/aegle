import React from "react";
import NavbarGap from "./../components/NavbarGap";
import { Button, Form } from "react-bootstrap";

import { Chart } from "react-charts";
let sourceCode;

function NSimulation(props) {
    const data = React.useMemo(
        () => [
            {
                label: "Series 1",
                datums: [
                    {
                        x: new Date("2020-03-18T11:00:00.000Z"),
                        y: 60,
                    },
                    {
                        x: new Date("2020-03-18T11:30:00.000Z"),
                        y: 23,
                    },
                    {
                        x: new Date("2020-03-18T12:00:00.000Z"),
                        y: 65,
                    },
                    {
                        x: new Date("2020-03-18T12:30:00.000Z"),
                        y: 84,
                    },
                    {
                        x: new Date("2020-03-18T13:00:00.000Z"),
                        y: 87,
                    },
                    {
                        x: new Date("2020-03-18T13:30:00.000Z"),
                        y: 84,
                    },
                    {
                        x: new Date("2020-03-18T14:00:00.000Z"),
                        y: 96,
                    },
                    {
                        x: new Date("2020-03-18T14:30:00.000Z"),
                        y: 88,
                    },
                    {
                        x: new Date("2020-03-18T15:00:00.000Z"),
                        y: 63,
                    },
                    {
                        x: new Date("2020-03-18T15:30:00.000Z"),
                        y: 60,
                    },
                ],
            },
            {
                label: "Series 2",
                datums: [
                    {
                        x: new Date("2020-03-18T11:00:00.000Z"),
                        y: 41,
                    },
                    {
                        x: new Date("2020-03-18T11:30:00.000Z"),
                        y: 15,
                    },
                    {
                        x: new Date("2020-03-18T12:00:00.000Z"),
                        y: 95,
                    },
                    {
                        x: new Date("2020-03-18T12:30:00.000Z"),
                        y: 96,
                    },
                    {
                        x: new Date("2020-03-18T13:00:00.000Z"),
                        y: 33,
                    },
                    {
                        x: new Date("2020-03-18T13:30:00.000Z"),
                        y: 96,
                    },
                    {
                        x: new Date("2020-03-18T14:00:00.000Z"),
                        y: 32,
                    },
                    {
                        x: new Date("2020-03-18T14:30:00.000Z"),
                        y: 49,
                    },
                    {
                        x: new Date("2020-03-18T15:00:00.000Z"),
                        y: 18,
                    },
                    {
                        x: new Date("2020-03-18T15:30:00.000Z"),
                        y: 69,
                    },
                ],
            },
        ],
        [],
    );
    const series = React.useMemo(
        () => ({
            showPoints: false,
        }),
        [],
    );
    const axes = React.useMemo(
        () => [
            { primary: true, type: "time", position: "bottom" },
            { type: "linear", position: "left" },
        ],
        [],
    );
    return (
        <>
            <NavbarGap />
            <div className="__NSimulation">
                <div className="title-wbg">Don`t pay so much for risk management</div>
                <div className="subtitle-wbg">Give us a spin; see how much Aegle could save your company</div>
                <div className="wrapper">
                    <div className="first">
                        <span>Standard Speific Stoploss Simulator</span>
                        <table>
                            <tr>
                                <td>Number of Covered Lives</td>
                                <td>
                                    <Form.Select size="sm">
                                        <option>Small select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>Annual Growth in Covered Lives</td>
                                <td>
                                    <Form.Select size="sm">
                                        <option>Small select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>Specific Attachment Point</td>
                                <td>
                                    <Form.Select size="sm">
                                        <option>Small select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>Current Annual Stop-Loss Premium PEPM (best guess OK)</td>
                                <td>
                                    <Form.Select size="sm">
                                        <option>Small select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>Lasers & Exclusions</td>
                                <td>
                                    <Form.Select size="sm">
                                        <option>Small select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>Lasers & Exclusions</td>
                                <td>
                                    <Form.Select size="sm">
                                        <option>Small select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>Lasers & Exclusions</td>
                                <td>
                                    <Form.Select size="sm">
                                        <option>Small select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        </table>
                        <Button className="button">New Simulations</Button>
                        <Button className="button">Download Results</Button>
                    </div>
                    <div className="second">
                        <Chart data={data} series={series} axes={axes} tooltip className="chart" />
                    </div>
                    <div className="third">
                        <span className="box">Average Loss Ratio : 75%</span>
                        <span className="box">Simulation Winner : Aegle</span>
                        <span className="message">(Has won X out of Y times)</span>
                        <span className="box">Average Savings, Year 1 : 80%</span>
                        <span className="message">(Cumulative average: XX%)</span>
                        <span className="box">Average Savings, Year 5 : 23%</span>
                        <span className="message">(Cumulative average: XX%)</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NSimulation;
