import './App.css';
import React, { useState, useEffect } from 'react';
import GlobalSalesChart from './Components/GlobalSalesChart/GlobalSalesChart';
import axios from 'axios';
import NorthAmericaSalesChart from './Components/NorthAmericaSalesChart/NorthAmericaSalesChart';
import Navbar from './Components/NavBar/Navbar';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState([]);
  const [gameIds, setGameIds] = useState([])
  const [filteredSearch, setFilteredSearch] = useState([])

  async function getGames(){
      let response = await axios.get('http://localhost:8080/all');
      setGames(response.data);
  }

  async function getGame(){
    let response = await axios.get(`http://localhost:8080/getById/10`);
      setGame(response.data)
      console.log(response.data);
  }

    useEffect(()=>{
        getGames();
        getGame();
    }, [])
    
  return (
    <div>
      <Navbar games={games} setGameIds={setGameIds} setFilteredSearch={setFilteredSearch}/>
      <GlobalSalesChart games={games}/>
      <NorthAmericaSalesChart games={games}/>
      <br></br>
      <SearchResults filteredSearch={filteredSearch}/>
    </div>
  );
}

  


export default App;
