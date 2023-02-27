import React from "react";
import Card from "./Card";

function Inventory({ beers }) {
    console.log(beers);
    const beerList = beers.map((beer) => (
        <Card 
        key={beer.id}
        name={beer.name}/>
    ))
    return (
        <div>
            {beerList}
        </div>
    )
}

export default Inventory;