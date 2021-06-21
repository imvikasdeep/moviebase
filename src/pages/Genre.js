import React, {useState, useEffect} from 'react';
import Movielist from '../components/Movielist';
import Loader from '../components/Loader';
import { API_KEY, API_URL } from '../api/config';

const Genre = ({match}) => {

    let genreName = match.params.type.replace(/-/g, ' ');


    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(1);

    let fetchMovies = async (genreId) => {
        let data = await fetch(`${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        let resposnse = await data.json();
        console.log(resposnse);

        setMovies(resposnse.results);
        setLoading(0);
    }

    const getData = async () => {
        let data = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
        let resposnse = await data.json();
        
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



    if (loading) {
        return(
            <Loader />
        );
    }


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
