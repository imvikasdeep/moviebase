import React, {useState, useEffect} from 'react';
import Movielist from '../components/Movielist';
import { API_KEY, API_URL } from '../api/config';

const Home = () => {
    
    useEffect(() => {
        fetchMovies();
    }, []);

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
        const resposnse = await data.json();

        setMovies(resposnse.results);
        
    }


    return (

        <main className="wrapper">
            <div className="container">

                <div className="content">
                    <div className="heading">
                        <h1>The Trending Movies</h1>
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

export default Home;
