import React, {useState, useEffect} from 'react';
import Movielist from '../components/Movielist';
import { API_KEY, API_URL } from '../api/config';

const Genre = ({match}) => {
    
    // let genreName = props.match.params.name;
    let genreId = match.params.id;
    console.log(genreId);


    const [movies, setMovies] = useState([]);

    let fetchMovies = async () => {
        let data = await fetch(`${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        let resposnse = await data.json();
        console.log(resposnse);

        setMovies(resposnse.results);
        
    }
    
    useEffect(() => {
        fetchMovies();
    }, [genreId]);

    return (

        <main className="wrapper">
            <div className="container">

                <div className="content">
                    <div className="heading">
                        <h1>{genreId} Movies</h1>
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

export default Genre;
