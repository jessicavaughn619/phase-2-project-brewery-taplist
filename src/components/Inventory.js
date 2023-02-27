import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";

function Inventory({ beers, onUpdateInventory }) {

    const beerList = beers.map((beer) => (
        <BeerCard 
        key={beer.id}
        beer={beer}
        manageInventory={true}
        onUpdateInventory={onUpdateInventory}
        />
    ))
    return (
        <div>
            <Card.Group itemsPerRow={3}>{beerList}</Card.Group>
        </div>
    )
}

export default Inventory;