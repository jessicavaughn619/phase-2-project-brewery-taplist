import React from "react";
import "./Search.css";

function Search({ search, onSearch }) {
    return (
        <div className="search-component">
            <input 
            type="text"
            className="search-input"
            placeholder="Search by beer name or style"
            value={search}
            onChange={(e) => onSearch(e.target.value)}></input>
        </div>
    )
}

export default Search;