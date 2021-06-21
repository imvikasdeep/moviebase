import React, {useState, useEffect} from 'react';
import { API_KEY, API_URL, posterURL } from '../api/config';

const MovieDetails = ({match}) => {

    const movieId = match.params.id;

    // console.log(movieId);

    const [movie, setMovie] = useState({
        genres: []
    });

    
    // Fetch movie details
    

    
    
    useEffect(() => {

        window.scrollTo(0, 0);
        
        let fetchMovie = async () => {
            let data = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
            let resposnse = await data.json();
            setMovie(resposnse);
        }

        fetchMovie();

    }, []);

    console.log('hi');
    

    const movie_poster = `${posterURL}/original/${movie.backdrop_path}`;

    // Get the year from movie release date
    let release_year = movie.release_date;
    release_year = new Date(release_year).getFullYear();

    // Movie runtime in Hours and Minutes
    let time = movie.runtime;
    var Hours = Math.floor(time /60);
    var minutes = time % 60;



    return (

        <main className="moviedetails">
            <div className="container">

                <section className="poster" style={{ backgroundImage: `url(${movie_poster})` }}></section>

                <section className="content">
                    <div className="play">
                        <i className="material-icons-outlined">play_circle_outline</i>
                    </div>
                    <div className="heading">
                        <h1>{movie.original_title}</h1>
                    </div>
                    <ul className="detail-list">
                        <li><i className="material-icons-outlined">star</i> {movie.vote_average}</li>
                        <li><i className="material-icons-outlined">bolt</i>
                            {movie.genres.map(genre => (
                                <span key={genre.id}>{genre.name} &nbsp;</span>
                            ))}
                        </li>
                        <li><i className="material-icons-outlined">event</i> {release_year}</li>
                        <li><i className="material-icons-outlined">schedule</i> {Hours}h {minutes} min</li>
                        {movie.adult && <li><i className="material-icons-outlined">perm_identity</i> 18+</li>}
                    </ul>
                    <div className="movie__desc">
                        {movie.overview}
                    </div>
                </section>

            </div>
        </main>

    );
    
}

export default MovieDetails;
