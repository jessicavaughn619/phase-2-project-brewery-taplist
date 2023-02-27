import React, { useState, useEffect } from "react";
import Inventory from "./Inventory";
import OnTap from "./OnTap";
import ComingSoon from "./ComingSoon";

function BeerList() {
const [beers, setBeers] = useState([]);
const [showInventory, setShowInventory] = useState(false);

useEffect(() => {
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => setBeers(beers))
}, [])

const beersOnTap = beers.filter((beer) => beer.status === "On Tap")

const beersComingSoon = beers.filter((beer) => beer.status === "Coming Soon")

function handleClick() {
    setShowInventory((showInventory) => !showInventory);
}

function handleUpdateInventory(updatedBeer) {
    const updatedBeers = beers.map((beer) => {
        if (beer.id === updatedBeer.id) {
            return updatedBeer;
        } else {
            return beer;
        }
    })
    setBeers(updatedBeers);
}

    return (
        <div>
            <OnTap 
            beers={beersOnTap}/>
            <ComingSoon 
            beers={beersComingSoon}/>
            <button onClick={handleClick}>{showInventory ? "Hide Beer Repository" : "Show Beer Repository"}</button>
            {showInventory ? 
            <Inventory 
            beers={beers}
            onUpdateInventory={handleUpdateInventory}/> : null}
        </div>
    )
}

export default BeerList;