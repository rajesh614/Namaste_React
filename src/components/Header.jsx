import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "url:../../assets/onlylogo.jpg";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    useEffect(() => {
        console.log("Header useEffect rendered");
    }, []);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Cravingo Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li style={{ cursor: "pointer" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </li>
                    <button
                        className="login"
                        onClick={() =>
                            btnName == "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login")
                        }>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
