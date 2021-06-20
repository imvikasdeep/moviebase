import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Movielist from '../components/Movielist';
import { API_KEY, API_URL } from '../api/config';

const Search = () => {

    let searchQuery = useParams();
    searchQuery = searchQuery.search;

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        const resposnse = await data.json();

        setMovies(resposnse.results);
        
    }

    useEffect(() => {
        fetchMovies();
        console.log(movies);
    }, [searchQuery]);

    return (

        <main className="wrapper">
            <div className="container">

                <div className="content">
                    <div className="heading">
                        <h1>Showing results for '{searchQuery.replace(/-/g, ' ')}'</h1>
                    </div>
                </div>

                <Movielist movies={movies} />
                
                <div className="pagination">
                    <a href="/" className="button">Prev</a>
                    <a href="/" className="button">Next</a>
                </div>

            </div>
        </main>

    );
    
}

export default Search;
