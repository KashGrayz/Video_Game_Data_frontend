import './App.css';
import React, { useState, useEffect } from 'react';
import GlobalSalesChart from './Components/GlobalSalesChart/GlobalSalesChart';
import axios from 'axios';
import NorthAmericaSalesChart from './Components/NorthAmericaSalesChart';


function App() {
  const [games, setGames] = useState([]);

  async function getGames(){
      let response = await axios.get('http://localhost:8080/all');
      setGames(response.data);
  }


    useEffect(()=>{
        getGames();
    }, [])

    async function getGames(){
      try{
        const response = await axios.get('http://localhost:8080/all');
        console.log(response.data)
        setGames(response.data);
      } catch(ex){
        console.log(`ERROR in getGames EXCEPTION: ${ex}`)

      }
    }

    
  return (
    <div>
      <GlobalSalesChart games={games}/>
      <NorthAmericaSalesChart games={games}/>
    </div>
  );
}

  


export default App;
