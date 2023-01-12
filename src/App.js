import './App.css';
import React, { useEffect, useState } from 'react';
import GlobalSalesGames from './Components/GlobalSalesChart/GlobalSalesChart';
import axios from 'axios';


function App() {

  const [games, setGames] = useState([]);

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
        <GlobalSalesGames games={games}/>
      </div>
    );


}

  


export default App;
