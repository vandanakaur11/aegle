import React, { useState, useEffect } from "react";
import "./../style/RequestPricing.scss";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function RequestPricing() {
    const [isRequested, setIsRequested] = useState(false);
    return (
        <>
            <Navbar theme="dark" />
            <div className="__RequestPricing">
                <div className="left">
                    <h1>Get a quote</h1>
                    <p>Fill out a form to get the quote. Our team will repsond within 24 hours.</p>
                </div>
                {!isRequested ? (
                    <div className="right">
                        <div className="form">
                            <div className="packet" style={{ width: "38%" }}>
                                <label>First Name*</label>
                                <input type="text" />
                            </div>
                            <div className="packet" style={{ width: "56%" }}>
                                <label>Last Name*</label>
                                <input type="text" />
                            </div>
                            <div className="packet" style={{ width: "96%" }}>
                                <label>Email*</label>
                                <input type="text" />
                            </div>
                            <div className="packet" style={{ width: "56%" }}>
                                <label>Phone number*</label>
                                <input type="text" />
                            </div>
                            <div className="packet" style={{ width: "48%" }}>
                                <label>Position*</label>
                                <Form.Select aria-label="">
                                    <option value="1">Employer</option>
                                    <option value="2">Employee</option>
                                    <option value="3">Broker</option>
                                    <option value="4">Other</option>
                                </Form.Select>
                            </div>
                            <div className="packet" style={{ width: "48%" }}>
                                <label>If other, specify</label>
                                <input type="text" />
                            </div>
                        </div>
                        <h3>Upload your current insurance documents to get a personalized valuation</h3>
                        <p>Click here for more information on our compatible data formattings.</p>
                        <button className="button empty">
                            Upload Data
                            <input type="file" className="fileUpload" />
                        </button>
                        <button
                            className="button"
                            onClick={() => {
                                setIsRequested(!isRequested);
                            }}
                        >
                            Request a free quote
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="requested">
                            <div className="white">
                                <span className="s1">Thank you for filling out the form!</span>
                                <span className="s2">We will reach out to you very soon</span>
                            </div>
                            <div className="requestedBottom">
                                <span>Want to see how much you`d save?</span>
                                <Link to="/simulateAegle" className="button">
                                    Simulate Aegle
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer theme="light" />
        </>
    );
}

export default RequestPricing;
