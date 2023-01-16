import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = ({games, setFilteredSearch}) => {
    return (
      <div className="flex-container">
        <div className="navBar">
          <ul>
            <li className="brand">
              <Link to="/"><b className='nav'>GamerData</b></Link>
            </li>
            <li>
              <SearchBar games={games} setFilteredSearch={setFilteredSearch}/>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  