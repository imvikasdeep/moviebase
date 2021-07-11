import React, {useState, useEffect} from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Movielist from '../components/Movielist';
import { API_KEY, API_URL, posterURL } from '../api/config';

const MovieDetails = ({match}) => {

    const movieId = match.params.id;

    const [movie, setMovie] = useState({
        genres: []
    });

    const [trailer, setTrailer] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    
    const [loading, setLoading] = useState(1);
    const [error, setError] = useState(0);

    
    useEffect(() => {

        window.scrollTo(0, 0);
        
        // Fetch movie details
        let fetchMovie = async () => {
                await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`)
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data');
                    }
                    return res.json();
                })
                .then(data => {
                    setMovie(data);
                    setLoading(0);
                })
                .catch(err => {
                    setLoading(0);
                    setError(1);
                })
        
        }

        
        const fetchVideos = async() => {
            const data = await fetch(`${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
            const resposnse = await data.json();
            
            
            let getTrailer = resposnse.results.find(videos => videos.type === 'Trailer');
            setTrailer(getTrailer);
        }

        const fetchSimilarMovies = async() => {
            const data = await fetch(`${API_URL}/movie/${movieId}/similar?api_key=${API_KEY}`);
            const resposnse = await data.json();

            setSimilarMovies(resposnse.results);
        }

        fetchMovie();
        fetchVideos();
        fetchSimilarMovies();


    }, [movieId]);

    const movie_poster = `${posterURL}/original/${movie.backdrop_path}`;

    // Get the year from movie release date
    let release_year = movie.release_date;
    release_year = new Date(release_year).getFullYear();

    // Movie runtime in Hours and Minutes
    let time = movie.runtime;
    var Hours = Math.floor(time /60);
    var minutes = time % 60;

    // Trailer link
    const trailerLink = `https://www.youtube.com/watch?v=${trailer.key}`;

    if (loading) {
        return (
            <Loader />
        );
    }

    if ( error ) {
        return (
            <Error />
        );
    }

    return (

        <main className="moviedetails">
            <div className="container">

                <section className="poster" style={{ backgroundImage: `url(${movie_poster})` }}></section>

                <section className="content">
                    {trailer.key !== null && trailer.key !== undefined && trailer.key !== '' ? (    
                        <a href={trailerLink} target="_blank" rel="noreferrer" className="play">
                            <i className="material-icons-outlined">play_circle_outline</i>
                        </a>
                    ) : (
                        <React.Fragment />
                    )}
                    <div className="heading">
                        <h1 className="movieTitle">{movie.original_title}</h1>
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

                {similarMovies !== undefined && similarMovies !== null && similarMovies.length !== 0 ? (
                    <React.Fragment>
                        <div className="content">
                            <div className="heading">
                                <h1>You may also like</h1>
                            </div>
                        </div>

                        <Movielist movies={similarMovies.slice(0, 5)} swipeClass="swipe"/>
                    </React.Fragment>
                ) : (
                    <React.Fragment />
                )}

            </div>
        </main>

    );
    
}

export default MovieDetails;
