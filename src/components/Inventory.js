import React from "react";
import BeerCard from "./BeerCard";
import Search from "./Search";
import { Card } from "semantic-ui-react";
import "./Inventory.css";

function Inventory({ beers, onUpdateInventory, search, onSearch }) {

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
            <div className="search">
                <Search 
                    search={search}
                    onSearch={onSearch}
                />
            </div>
            <div className="cards">
                <Card.Group>{beerList}</Card.Group>
            </div>
        </div>
    )
}

export default Inventory;