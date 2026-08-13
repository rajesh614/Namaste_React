import React from "react";
import logo from "url:../../assets/onlylogo.jpg";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;