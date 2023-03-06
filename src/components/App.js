import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import BeerList from './BeerList';
import Footer from "./Footer";
import "./App.css";

function App() {
const [beers, setBeers] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => setBeers(beers))
}, [])

function handleAddNewBeer(newBeer) {
    const updatedBeers = [{...beers, newBeer}];
    setBeers(updatedBeers);
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
    <div className="App">
        <Header />
        <Nav />
        <BeerList 
          beers={beers}
          onAddNewBeer={handleAddNewBeer}
          onUpdateInventory={handleUpdateInventory}
          search={search}
          onSearch={setSearch}
        />
        <Footer />
    </div>
  );
}

export default App;
