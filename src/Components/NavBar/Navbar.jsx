import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({games, setGameIds, setFilteredSearch}) => {
    return (
      <div>
        <div className="navBar">
          <ul>
            <li className="brand">
                <b className='nav'>Gamer</b><b className='nav'>Data</b>
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
  