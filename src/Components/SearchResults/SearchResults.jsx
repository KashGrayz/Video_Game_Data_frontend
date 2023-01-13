import React from 'react';
import './SearchResults.css';

const SearchResults = ({filteredSearch}) => {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>RANK</th>
                        <th>PLATFORM</th>
                        <th>GENRE</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSearch.map((game, index) => {
                        return (
                            <tr key={index}>
                                <td>{game.name}</td>
                                <td>{game.game_rank}</td>
                                <td>{game.platform}</td>
                                <td>{game.genre}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default SearchResults;
