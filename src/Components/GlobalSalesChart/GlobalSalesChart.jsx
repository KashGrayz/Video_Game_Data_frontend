import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GlobalSalesChart = (props) => {
    const [games, setGames] = useState([]);

    async function getGames(){
      let response = await axios.get('http://localhost:8080/all');
      setGames(response.data);
      console.log(response.data)
      filterGlobalSales(response.data)
    }

    function filterGlobalSales (games){
        let globalSaleGames = games.filter(function(el){
            if (el.year >= 2013){
                return true;
            }
        });
        console.log(globalSaleGames)
        return globalSaleGames
    }

    useEffect(()=>{
        getGames();
    }, [])

    return ( 
        <div>
        </div>
     );
}
 
export default GlobalSalesChart;