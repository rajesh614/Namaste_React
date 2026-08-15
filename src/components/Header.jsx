import React, { useState } from "react";
import logo from "url:../../assets/onlylogo.jpg";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Cravingo Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Kart</li>
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
