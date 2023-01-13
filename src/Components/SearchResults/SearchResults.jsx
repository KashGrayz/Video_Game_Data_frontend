import React from 'react';

import './SearchResults.css';

const SearchResults = ({filteredSearch}) => {
    return (
        <div className="FilteredSearches">
            <table>
                <thead>
                    <tr className='TableHeaders'>
                        <td>NAME</td>
                        <td>RANK</td>
                        <td>PLATFORM</td>
                        <td>GENRE</td>
                    </tr>
                </thead>
                <tbody >
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