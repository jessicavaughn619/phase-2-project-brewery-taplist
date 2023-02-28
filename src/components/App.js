import React from 'react';
import Header from "./Header";
import Nav from "./Nav";
import BeerList from './BeerList';
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <BeerList />
        <Footer />
    </div>
  );
}

export default App;
