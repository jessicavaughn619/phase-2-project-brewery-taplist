import React from "react";
import Inventory from "./Inventory";
import OnTap from "./OnTap";
import ComingSoon from "./ComingSoon";

function BeerList() {
    return (
        <div>
            <h1>Beer List</h1>
            <Inventory />
            <OnTap />
            <ComingSoon />
        </div>
    )
}

export default BeerList;