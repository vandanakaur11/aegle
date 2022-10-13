import React from "react";
import { ListGroup } from "react-bootstrap";

function What2(props) {
    return (
        <div className="__What2">
            <div className="title">What is Aegle</div>
            <ListGroup as="ol" numbered className="listgroup_custom">
                <ListGroup.Item as="li">
                    <div className="liContent">
                        <h1>Financial Engineering instead of Insurance</h1>
                        <p>Socphicaticated techniques derived from global options and catastrophe bond markets</p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
            <div className="buttonWrapper">
                <button className="button">Other Box</button>
                <button className="button">Other Box</button>
                <button className="button">Other Box</button>
            </div>
        </div>
    );
}

export default What2;
