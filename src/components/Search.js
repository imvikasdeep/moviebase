import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Search = ({toggleMenu}) => {

    const [input, setInput] = useState('');
    let history = useHistory();

    const handleInput = (e) => {;
        setInput(e.target.value)
    }

    const searchMovie = (e) => {
        e.preventDefault();

        if(input.length > 0) {
            history.push({
                pathname: `/search/${input.toLowerCase().replace(/ /g, '-')}`,
                state: input
            });
            toggleMenu();
        }

        setInput('');
    }

    return(
            
        <form className="searchform" onSubmit={searchMovie}>
            <div className="search__group">
                <input type="text" className="search__input" value={input} onChange={handleInput} placeholder="Search" />
                <button type="submit">
                    <i className="material-icons-outlined">search</i>
                </button>
            </div>
        </form>

    );
}

export default Search;
