import React, {useState, useEffect} from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Movielist from '../components/Movielist';
import PersonList from '../components/PersonList';
import { API_KEY, API_URL, posterURL } from '../api/config';

const MovieDetails = ({match}) => {

    const movieId = match.params.id;

    const [movie, setMovie] = useState({
        genres: []
    });

    const [trailer, setTrailer] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [cast, setCast] = useState([]);
    
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
            const response = await data.json();
            
            if(response.results.length !== 0) {
                let getTrailer = response.results[0];                        
                setTrailer(getTrailer.key);
            }
        }

        const fetchSimilarMovies = async() => {
            const data = await fetch(`${API_URL}/movie/${movieId}/similar?api_key=${API_KEY}`);
            const response = await data.json();

            if(response.results.length !== 0) {
                setSimilarMovies(response.results);
            }
        }

        // Fetch Credits
        const fetchCast = async () => {
            const data = await fetch(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
            const response = await data.json();
    
            setCast(response.cast);
        }

        fetchMovie();
        fetchVideos();
        fetchSimilarMovies();
        fetchCast();

    }, [movieId]);

    const movie_poster = `${posterURL}/original/${movie.backdrop_path}`;

    // Get the year from movie release date
    let release_year = movie.release_date;
    release_year = new Date(release_year).getFullYear();

    // Movie runtime in Hours and Minutes
    let time = movie.runtime;
    var Hours = Math.floor(time /60);
    var minutes = time % 60;

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
                    {trailer ? (    
                        <a href={`https://www.youtube.com/watch?v=${trailer}`} target="_blank" rel="noreferrer" className="play">
                            <i className="material-icons-outlined">play_circle_outline</i>
                        </a>
                    ) : null }
                    <div className="heading flex-column">
                        <h1 className="movieTitle">{movie.original_title}</h1>
                    </div>
                    <p>{movie.tagline}</p>
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

                <section className="">
                    <PersonList cast={cast.slice(0, 10)}> </PersonList>
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
