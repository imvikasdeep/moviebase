import React, {useState, useEffect} from 'react';
import Movielist from '../components/Movielist';
import { API_KEY, API_URL } from '../api/config';

const Genre = ({match}) => {

    let genreName = match.params.type.replace(/-/g, ' ');


    const [movies, setMovies] = useState([]);

    let fetchMovies = async (genreId) => {
        let data = await fetch(`${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        let resposnse = await data.json();
        console.log(resposnse);

        setMovies(resposnse.results);
    }

    const getData = async () => {
        let data = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
        let resposnse = await data.json();
        // console.log(resposnse.genres)
        
        let filterGenre = resposnse.genres.find(genre => genre.name.toLowerCase() === genreName);
        
        if (!filterGenre || filterGenre === undefined) {
            console.log('error');
        } else {
            fetchMovies(filterGenre.id);
        }
    }
    
    useEffect(() => {
        getData();
    }, [genreName]);

    return (

        <main className="wrapper">
            <div className="container">

                <div className="content">
                    <div className="heading">
                        <h1>{genreName} Movies</h1>
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
