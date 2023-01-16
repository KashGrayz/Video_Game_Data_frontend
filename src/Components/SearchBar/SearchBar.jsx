import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ games, setFilteredSearch }) => {
  const [searchInput, setSearchInput] = useState([]);
  

  function handleSubmit(event) {
    event.preventDefault();
    let filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchInput)
    );
    console.log("Filtered Games: ", filteredGames);
    setFilteredSearch(filteredGames);
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="string"
          placeholder="Search games.."
          className="iform"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        ></input>
        <button type="submit" className="searchbutton">SEARCH</button>
      </form>
    </div>
  );
};

export default SearchBar;
