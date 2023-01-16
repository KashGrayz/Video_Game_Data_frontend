import React from 'react';
import './SearchResults.css';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({filteredSearch}) => {
    const navigate = useNavigate()

    function handleSubmit(game){
        console.log(game.id)
        navigate('/statspage', { state : {id:game.id}})
    }

    return (
        <div className="FilteredSearches">
            <table>
                <thead>
                    <tr className='TableHeaders'>
                        <td>NAME</td>
                        <td>RANK</td>
                        <td>PLATFORM</td>
                        <td>GENRE</td>
                        <td>INFO</td>
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
                                <td onClick={()=>handleSubmit(game)}><button className='statbutton'>Stats</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
     );
}
export default SearchResults;