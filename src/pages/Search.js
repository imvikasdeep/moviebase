import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Movielist from '../components/Movielist';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { API_KEY, API_URL } from '../api/config';

const Search = () => {

    let searchQuery = useParams();
    searchQuery = searchQuery.search;

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(0);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {

        const fetchMovies = async () => {
            await fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data');
                }
                return res.json();
            })
            .then(data => {
                setMovies(data.results);
                setLoading(0);
            })
            .catch(err => {
                setError(1);
            })
            
        }
        
        fetchMovies();

    }, [searchQuery]);

    
    console.log(loading);

    if (loading) {
        return(
            <Loader />
        );
    }


    if (error) {
        return(
            <Error />
        );
    }


    if (movies === undefined || movies.length === 0) {
        return (
            <div className="pagenotfound">
                <h1>Oops!</h1>
                <h2>Could not find any result matching "{searchQuery.replace(/-/g, ' ')}"</h2>
                <Link className="button" to="/">Return home</Link>
            </div>
        )
    }

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
