import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "flex",
    width: "100px",
    height: "50px",
    padding: "10px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function Nav() {
    return (
        <div>
            <NavLink 
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                Home
            </NavLink>
            <NavLink 
                to="/inventory"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                Inventory
            </NavLink>
            <NavLink 
                to="/addbeer"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                Add New Beer
            </NavLink>
        </div>
    )
}

export default Nav;