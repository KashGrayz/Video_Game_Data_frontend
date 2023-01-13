import './App.css';
import React, { useState, useEffect } from 'react';
import GlobalSalesChart from './Components/GlobalSalesChart/GlobalSalesChart';
import axios from 'axios';
import NorthAmericaSalesChart from './Components/NorthAmericaSalesChart/NorthAmericaSalesChart';
import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/NavBar/Navbar';

function App() {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState([]);
  const [gameIds, setGameIds] = useState([])

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
      <Navbar/>
      <GlobalSalesChart games={games}/>
      <NorthAmericaSalesChart games={games}/>
      <SearchBar games={games} setGameIds={setGameIds}/>
    </div>
  );
}

  


export default App;
