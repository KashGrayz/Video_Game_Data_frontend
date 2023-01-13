import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ games, setGameIds, setFilteredSearch }) => {
  const [searchInput, setSearchInput] = useState([]);
  const [filteredSearch, setFilterGames] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    let filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchInput)
    );
    console.log("Filtered Games: ", filteredGames);
    setFilterGames(filteredGames);
    let filteredGameIds = filteredGames.map((game) => game.id);
    setGameIds(filteredGameIds);
    setFilteredSearch(filteredGames);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        ></input>
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default SearchBar;
