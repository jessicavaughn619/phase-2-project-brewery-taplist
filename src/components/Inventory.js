import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";
import "./Inventory.css";

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
        <div className="inventory">
            <div className="heading">
                <h2>Inventory</h2>
            </div>
            <div className="cards">
                <Card.Group itemsPerRow={3}>{beerList}</Card.Group>
            </div>
        </div>
    )
}

export default Inventory;