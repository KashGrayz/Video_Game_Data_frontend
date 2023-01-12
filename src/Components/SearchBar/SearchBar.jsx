import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ games, setGameIds }) => {
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
      <div className="FilteredSearches">
        {filteredSearch.map((game, index) => {
          return (
            <div key={index}>
              <div>Name: {game.name}</div>
              <div>Rank: {game.game_rank}</div>
              <div>Platform: {game.platform}</div>
              <div>Genre: {game.genre}</div>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
