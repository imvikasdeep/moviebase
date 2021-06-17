import React, {useState, useEffect} from 'react';
import Movielist from '../components/Movielist';
import { API_KEY, API_URL } from '../api/config';

const Home = () => {
    
    useEffect(() => {
        fetchMovies();
    }, []);

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}&page=3`);
        const resposnse = await data.json();

        setMovies(resposnse.results);
        
    }


    return (

        <main className="wrapper">
            <div className="container">

                <div className="content">
                    <div className="heading">
                        <h1>Trending Movies</h1>
                    </div>
                </div>

                <Movielist movies={movies} />
                
                <div className="load__more">
                    <a href="/" className="button">Load All Movies</a>
                </div>

            </div>
        </main>

    );
    
}

export default Home;
