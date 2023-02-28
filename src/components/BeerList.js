import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Inventory from "./Inventory";
import OnTap from "./OnTap";
import ComingSoon from "./ComingSoon";
import AddBeer from "./AddBeer";
import "./BeerList.css";

function BeerList() {
const [beers, setBeers] = useState([]);
const [search, setSearch] = useState("");

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
    const updatedBeers = [{...beers, newBeer}];
    console.log(updatedBeers);
    setBeers(updatedBeers);
}

const updatedBeers = beers.filter((beer) => {
    if (beer.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
    } else if (beer.style.toLowerCase().includes(search.toLowerCase())) {
        return true;
    }
});

    return (
        <div className="beer-list">
            <Switch>
                <Route exact path="/">
                    <OnTap 
                    beers={beersOnTap}/>
                    <ComingSoon 
                    beers={beersComingSoon}/>
                </Route>
                <Route path="/inventory">
                    <Inventory 
                    beers={updatedBeers}
                    search={search}
                    onSearch={setSearch}
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