import React, { useState, useEffect } from "react";
import Inventory from "./Inventory";
import OnTap from "./OnTap";
import ComingSoon from "./ComingSoon";

function BeerList() {
const [beers, setBeers] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => setBeers(beers))
}, [])

    return (
        <div>
            <h1>Beer List</h1>
            <Inventory 
            beers={beers}/>
            <OnTap />
            <ComingSoon />
        </div>
    )
}

export default BeerList;