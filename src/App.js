import './App.css';
import React, { useState, useEffect } from 'react';
import GlobalSalesChart from './Components/GlobalSalesChart/GlobalSalesChart';
import axios from 'axios';


function App() {
  const [games, setGames] = useState([]);

  async function getGames(){
      let response = await axios.get('http://localhost:8080/all');
      setGames(response.data);
  }

  useEffect(()=>{
    getGames();
  }, [])

  return (
    <div>
      <GlobalSalesChart games={games}/>
    </div>
  );
}

export default App;
