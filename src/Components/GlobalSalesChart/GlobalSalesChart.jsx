import React from 'react';
import { Chart } from "react-google-charts";
import '../GlobalSalesChart/GlobalSalesChart.css'


const GlobalSalesChart = ({games}) => {

    function findChartData(){

        console.log(games)

        let filteredGames = games.filter(game => game.year >= 2013);

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
                globalSales += allGamesForPlatform[i].globalsales
            }
            console.log(globalSales)
            

            return [platform, globalSales, "rgb(62,240,252)"]
        });

        console.log('Platform Arrays', platformArrays )

        const data = [
        ["Platform", "Sales", { role: "style" }],
        ...platformArrays
        ];

        console.log('Data', data)

        return data;

    }
    
    return ( 
        <div >
            <h1 className='chart'>Platform By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" legend={'position:bottom'} data={findChartData()} />
        </div>
     );
}
export default GlobalSalesChart;