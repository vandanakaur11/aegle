import React, { useEffect } from "react";
import { Navbar, Container, Nav, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../style/Navbar.scss";

function NavbarComponent({ theme }) {
    return (
        <div className={`__Navbar ${theme === "dark" ? "dark" : "light"}`}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Link to="/">
                        <div className="logoWrapper" id="logoWrapper">
                            <img
                                className="logo"
                                src="https://aeglehealthpartners.com/wp-content/uploads/2020/12/logo-header-cropped.png"
                                alt="Logo"
                            />
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-links-left">
                            <Link to="/whatIsAegle" className="left nav-link">
                                What is Aegle
                            </Link>
                            <Nav.Link href="#" className="left">
                                How Aegle works
                            </Nav.Link>
                            <Nav.Link href="#" className="left">
                                Simulate Aegle
                            </Nav.Link>
                            <DropdownButton as={ButtonGroup} title="About Aegle" className="left dropdown">
                                <Dropdown.Item eventKey="1" className="dropdownItem">
                                    About
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" className="dropdownItem">
                                    Careers
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="3" className="dropdownItem">
                                    Support
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="4" className="dropdownItem">
                                    Contact us
                                </Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                        <Nav className="ms-auto navbar-links-right">
                            <Nav.Link href="#" className="right">
                                Log in
                            </Nav.Link>
                            <Nav.Link href="#" className="right fill">
                                Get a quote
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
