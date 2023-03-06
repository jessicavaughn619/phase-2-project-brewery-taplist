import React from "react";
import { Route, Switch } from "react-router-dom";
import Inventory from "./Inventory";
import OnTap from "./OnTap";
import ComingSoon from "./ComingSoon";
import AddBeer from "./AddBeer";
import "./BeerList.css";

function BeerList( {beers, onAddNewBeer, onUpdateInventory, search, onSearch }) {

const beersOnTap = beers.filter((beer) => beer.status === "On Tap");

const beersComingSoon = beers.filter((beer) => beer.status === "Coming Soon");

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
                    onSearch={onSearch}
                    onUpdateInventory={onUpdateInventory}/>
                </Route>
                <Route path="/addbeer">
                    <AddBeer 
                    onAddNewBeer={onAddNewBeer}/>
                </Route>
            </Switch>
        </div>
    )
}

export default BeerList;