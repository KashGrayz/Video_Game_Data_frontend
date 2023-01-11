import React from 'react';
import {Chart} from 'react-google-charts';

const GlobalSalesChart = ({games}) => {

    //Filter all games 2013 and forward
    let filteredGames = games.filter((game) => game.year >= 2013);
    console.log('Filtered Games', filteredGames)


    //Map all platforms from FilteredGames List
    let platforms = filteredGames.map((game) => game.platform)
    console.log('Platforms', platforms)


    //Find all distinct platforms from Mapped platforms
    let distinctPlatforms = [...new Set(platforms)]
    console.log('Distinct Platforms', distinctPlatforms)


    //Extra data arrays for Main data
    let platformArrays = distinctPlatforms.map(platform => [platform,10,'silver'])
    console.log('PlatformArrays', platformArrays)


    //Data used for "Global Sales by Millions" chart
    const data = [
        ["Element", "Density", { role: "style" }],
        ...(platformArrays)
      ];


    return ( 
        <div>
            <h1>Global Sales by Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
     );
}
 
export default GlobalSalesChart;