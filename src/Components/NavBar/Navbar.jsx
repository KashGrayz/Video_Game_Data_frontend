import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({games, setGameIds, setFilteredSearch}) => {
    return (
      <div className="flex-container">
        <div className="navBar">
          <ul>
            <li className="brand">
                <b className='nav'>GamerData</b>
            </li>
            <li>
              <SearchBar games={games} setGameIds={setGameIds} setFilteredSearch={setFilteredSearch}/>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  