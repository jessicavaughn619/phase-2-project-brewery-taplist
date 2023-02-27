import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Inventory from "./Inventory";
import OnTap from "./OnTap";
import ComingSoon from "./ComingSoon";
import AddBeer from "./AddBeer";

function BeerList() {
const [beers, setBeers] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => setBeers(beers))
}, [])

const beersOnTap = beers.filter((beer) => beer.status === "On Tap")

const beersComingSoon = beers.filter((beer) => beer.status === "Coming Soon")

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

function handleAddNewBeer(newBeer) {
    const updatedBeers = [{...beers, newBeer}]
    setBeers(updatedBeers)
}

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <OnTap 
                    beers={beersOnTap}/>
                    <ComingSoon 
                    beers={beersComingSoon}/>
                </Route>
                <Route path="/inventory">
                    <Inventory 
                    beers={beers}
                    onUpdateInventory={handleUpdateInventory}/>
                </Route>
                <Route path="/addbeer">
                    <AddBeer 
                    onAddNewBeer={handleAddNewBeer}/>
                </Route>
            </Switch>
        </div>
    )
}

export default BeerList;