import React from "react";
import "./Header.css";
import picture from "../images/beer-hero.jpg";

function Header() {
    return (
        <div className="header">
            <img src={picture} className="header-image"></img>
        </div>
    )
}

export default Header;