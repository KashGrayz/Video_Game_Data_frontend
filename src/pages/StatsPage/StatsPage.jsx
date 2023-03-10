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
    ["Region", "Sales", { role: "style" }],
    ["NA", game.northamericasales, '#65f3fd'],
    ["JP",game.japansales, '#a30dd5'],
    ["EU", game.europesales, '#65f3fd'],
    ["GLOBAL",game.globalsales, '#a30dd5'],
    ["OTHER",game.othersales, '#65f3fd'],
    ];


    const options = {
    title: `${game.name} Sales For Each Region`,
    chartArea: { width: "80%" },
    legend: {role: 'style', textStyle: {color: 'black', fontSize: 'bold'}},
    colors: ['#65f3fd'],
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
            <Chart
            className='percent'
            chartType="BarChart"
            width="86.7%"
            height="600px"
            data={data}
            options={options}
            />
            <button className='returnb'><Link to="/">HomePage</Link></button>
        </div>
     );
}
 
export default StatsPage;