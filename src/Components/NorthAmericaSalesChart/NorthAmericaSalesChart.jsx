import React from 'react';
import { Chart } from "react-google-charts";
import '../NorthAmericaSalesChart/NorthAmericaSalesChart.css'

const NorthAmericaSalesChart = ({games}) => {

    function findChartData(){

        console.log(games)

        let filteredGames = games.filter(game => game.year >= 1980 && game.year <= 2016);

        console.log("Filtered Games", filteredGames )

        let platforms = filteredGames.map(game => {
            return game.platform
        });

        console.log('Platforms', platforms)

        let distinctPlatforms = [...new Set(platforms)]

        console.log('Distinct Platforms', distinctPlatforms)

        let platformArrays = distinctPlatforms.map(platform => {
            let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
            let globalSales = 0
            for (let i =0; i < allGamesForPlatform.length; i++){
                globalSales += allGamesForPlatform[i].northamericasales
            }
            console.log(globalSales)

            
            return [platform, globalSales, "rgb(163, 13, 213)"]
        });

        

        

        console.log('Platform Arrays', platformArrays)

        let filteredPlatformArrays = platformArrays.filter(array => array[1] <= 200 && array[1] >= 50)

        console.log('Platform Arrays', filteredPlatformArrays)

        const data = [

        ["Platform", "Sales", { role: "style" }],

        ...filteredPlatformArrays

        ];

        console.log('Data', data)

        return data;

    }

    const options = {
        chartArea: { width: "80%" },
        legend: {position: 'bottom', role: 'style', textStyle: {color: 'black', fontSize: 'bold'}},
        colors: ['#a30dd5'],
        hAxis: {
            minValue: 0,
        },
    };
    
    return ( 
        <div>
            <h1 className='chart'>Platform By North America Sales (Between 50 & 200 Millions)</h1>
            <Chart className='percent' chartType="ColumnChart" width="86.7%" height="400px" options={options} data={findChartData()} />
        </div>
     );
}
export default NorthAmericaSalesChart;