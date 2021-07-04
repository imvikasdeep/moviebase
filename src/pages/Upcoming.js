import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import queryString from 'query-string';
import Movielist from '../components/Movielist';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Pagination from '../components/pagination';
import { API_KEY, API_URL } from '../api/config';
import { useLocation } from 'react-router';

const Upcoming = () => {

    const parsed = queryString.parse(useLocation().search);
    let pageNo = parsed.page || 1;

    const [movies, setMovies] = useState({
        results: []
    });
    const [error, setError] = useState(0);
    const [loading, setLoading] = useState(1);

    

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchMovies = async () => {
            
            setLoading(1);
            await fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}&page=${pageNo}`)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data');
                }
                return res.json();
            })
            .then(data => {
                setMovies(data);
                setLoading(0);
            })
            .catch(err => {
                setError(1);
            })
            
        }
        
        fetchMovies();

    }, [pageNo]);

    
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
                <h2>Could not find any result</h2>
                <Link className="button" to="/">Return home</Link>
            </div>
        )
    }

    return (

        <main className="wrapper">
            <div className="container">

                <div className="content">
                    <div className="heading">
                        <h1>Upcoming Movies</h1>
                    </div>
                </div>

                <Movielist movies={movies.results} />
                
                <Pagination currentPage={movies.page} totalPages={movies.total_pages}/>

            </div>
        </main>

    );
    
}

export default Upcoming;
