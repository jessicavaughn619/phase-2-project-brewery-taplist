import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <NavLink 
                to="/"
                exact
                className="link-styles">
                Home
            </NavLink>
            <NavLink 
                to="/inventory"
                exact
                className="link-styles">
                Inventory
            </NavLink>
            <NavLink 
                to="/addbeer"
                exact
                className="link-styles">
                Add New Beer
            </NavLink>
        </div>
    )
}

export default Nav;