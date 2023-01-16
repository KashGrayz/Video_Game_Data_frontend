import React, { useState, useEffect } from 'react';
import './StatsPage.css';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Chart } from "react-google-charts";
import "../StatsPage/StatsPage.css"
import Navbar from '../../Components/NavBar/Navbar';

const StatsPage = (props) => {
    const location = useLocation()
    const [game, setGame] = useState([]);


    async function getGame(){
        let response = await axios.get(`http://localhost:8080/getById/${location.state.id}`);
          setGame(response.data)
          console.log(response.data);
      }


    useEffect(()=>{
        console.log(location.state.id)
        getGame()
    }, []);


    const data = [
    ["Region", "Sales"],
    ["NA", game.northamericasales,],
    ["JP",game.japansales],
    ["EU", game.europesales],
    ["GLOBAL",game.globalsales],
    ["OTHER",game.othersales],
    ];


    const options = {
    title: `${game.name} Sales For Each Region`,
    chartArea: { width: "60%" },
    hAxis: {
        title: "Total Sales in Millions",
        minValue: 0,
    },
    vAxis: {
        title: "Region",
    },
    };


    return ( 
        <div className='statspage'>
            <Navbar/>
            <button className='returnb'><Link to="/">Return to HomePage</Link></button>
            <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            />
        </div>
     );
}
 
export default StatsPage;