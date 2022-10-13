import React from "react";
import "./../style/Footer.scss";

function Footer({ theme }) {
    return (
        <div className={`__Footer ${theme === "dark" ? "dark" : "light"}`}>
            {/* Footer */}
            <footer className="page-footer font-small stylish-color-dark pt-4">
                {/* Footer Links */}
                <div className="container text-center text-md-left">
                    {/* Grid row */}
                    <div className="row d-flex flex-row justify-content-center align-items-start boxWrapper">
                        {/* Grid column */}
                        <div className="box col-md-6">
                            {/* Content */}
                            <img
                                src="https://aeglehealthpartners.com/wp-content/uploads/2020/12/logo-header-cropped.png"
                                alt="footer logo"
                                className="logo"
                            />
                            <span className="textInfo">
                                <p className="info">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam Lorem ipsum dolor sit amet.
                                </p>
                                <p className="email">info@aeglehealthpartners.com</p>
                            </span>
                        </div>
                        {/* Grid column */}
                        <hr className="clearfix w-100 d-md-none" />
                        {/* Grid column */}
                        <div className="box col-md-2">
                            {/* Links */}
                            <span className="linkHeading mt-3 mb-4">Product</span>
                            <ul className="list-unstyled linkWrapper">
                                <li>
                                    <a href="#!">Request pricing</a>
                                </li>
                                <li>
                                    <a href="#!">Simulate Aegle</a>
                                </li>
                                <li>
                                    <a href="#!">What is Aegle</a>
                                </li>
                                <li>
                                    <a href="#!">How Aegle Works</a>
                                </li>
                                <li>
                                    <a href="#!">Log in</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        <hr className="clearfix w-100 d-md-none" />
                        {/* Grid column */}
                        <div className="box col-md-2">
                            {/* Links */}
                            <span className="linkHeading mt-3 mb-4">Company</span>
                            <ul className="list-unstyled linkWrapper">
                                <li>
                                    <a href="#!">About Aegle</a>
                                </li>
                                <li>
                                    <a href="#!">Careers</a>
                                </li>
                                <li>
                                    <a href="#!">Support</a>
                                </li>
                                <li>
                                    <a href="#!">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        <hr className="clearfix w-100 d-md-none" />
                        {/* Grid column */}
                        <div className="box col-md-2">
                            {/* Links */}
                            <span className="linkHeading mt-3 mb-4">General conditions</span>
                            <ul className="list-unstyled linkWrapper">
                                <li>
                                    <a href="#!">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#!">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href="#!">Cookies management</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Footer Links */}
                <hr />
                {/* Copyright */}
                <div className="footer-copyright">
                    <span>© 2021 Aegle Health Partners</span>
                    <span>455 East 57th St #11A, New York NY 10022</span>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
            <div
                className="backToTop"
                onClick={() => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}
            >
                ↑
            </div>
        </div>
    );
}

export default Footer;
