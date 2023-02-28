import React from "react";
import "./Search.css";

function Search({ search, onSearch }) {
    return (
        <div>
            <input 
            type="text"
            name="search"
            placeholder="Search by beer name or style"
            value={search}
            onChange={(e) => onSearch(e.target.value)}></input>
        </div>
    )
}

export default Search;