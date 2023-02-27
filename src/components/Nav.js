import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div>
            <NavLink 
                to="/"
                exact
                className="link-styles"
                activeStyle={{
                background: "#cfa267",
                }}
            >
                Home
            </NavLink>
            <NavLink 
                to="/inventory"
                exact
                className="link-styles"
                activeStyle={{
                background: "#cfa267",
                }}
            >
                Inventory
            </NavLink>
            <NavLink 
                to="/addbeer"
                exact
                className="link-styles"
                activeStyle={{
                background: "#cfa267",
                }}
            >
                Add New Beer
            </NavLink>
        </div>
    )
}

export default Nav;