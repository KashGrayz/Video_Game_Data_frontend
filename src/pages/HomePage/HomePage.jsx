import './HomePage.css';
import React, { useState, useEffect } from 'react';
import GlobalSalesChart from '../../Components/GlobalSalesChart/GlobalSalesChart';
import axios from 'axios';
import NorthAmericaSalesChart from '../../Components/NorthAmericaSalesChart/NorthAmericaSalesChart';
import Navbar from '../../Components/NavBar/Navbar';
import SearchResults from '../../Components/SearchResults/SearchResults';

function HomePage() {
  const [games, setGames] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([])

  async function getGames(){
      let response = await axios.get('http://localhost:8080/all');
      setGames(response.data);
  }

    useEffect(()=>{
        getGames();
    }, [])
    
  return (
    <div className='homepagebody'>
      <Navbar games={games} setFilteredSearch={setFilteredSearch}/>
      <GlobalSalesChart games={games}/>
      <NorthAmericaSalesChart games={games}/>
      <br></br>
      <SearchResults filteredSearch={filteredSearch}/>
    </div>
  );
}

export default HomePage;