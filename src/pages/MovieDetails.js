import React, {useState, useEffect} from 'react';
import { API_KEY, API_URL, posterURL } from '../api/config';

const MovieDetails = ({match}) => {

    const movieId = match.params.id;

    const [movie, setMovie] = useState([]);

    console.clear();

    const fetchMovie = async () => {
        const data = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
        const resposnse = await data.json();

        setMovie(resposnse);
        console.log(movie);
        
    }    
    
    useEffect(() => {
        fetchMovie();
    }, []);
    

    const movie_poster = `${posterURL}/original/${movie.poster_path}`;

    // Get the year from movie release date
    let release_year = movie.release_date;
    release_year = new Date(release).getFullYear();


    return (

        <main className="moviedetails">
            <div className="container">

                <section className="poster" style={{ backgroundImage: `url(${movie_poster})` }}></section>

                <section className="content">
                    <div className="play">
                        <a href="#"><i className="material-icons-outlined">play_circle_outline</i></a>
                    </div>
                    <div className="heading">
                        <h1>{movie.original_title}</h1>
                    </div>
                    <ul className="detail-list">
                        <li><i className="material-icons-outlined">star</i> {movie.vote_average}</li>
                        <li><i className="material-icons-outlined">bolt</i> Drama &nbsp; Adventure &nbsp; Fiction</li>
                        <li><i className="material-icons-outlined">event</i> {release_year}</li>
                        <li><i className="material-icons-outlined">schedule</i> 2h 42 min</li>
                        <li><i className="material-icons-outlined">perm_identity</i> 13+</li>
                    </ul>
                    <div className="movie__desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe blanditiis quaerat quasi recusandae aut ipsum, consectetur voluptate! Nostrum totam quos nihil, voluptatem delectus praesentium commodi in quibusdam ullam vitae? Laudantium voluptate tempora tempore laborum. Expedita impedit provident ad, eum magnam obcaecati quisquam rem sapiente, perferendis in enim consequuntur similique officia consectetur eligendi. Iure, aliquam repellendus aperiam ipsa asperiores sapiente explicabo. Dolores repudiandae autem eius doloribus harum fugit quam, excepturi perspiciatis, vero odio illo eum numquam saepe aut voluptatum dolore maxime, est distinctio vitae. Earum debitis est dolore, non cupiditate voluptate amet totam ducimus laboriosam nostrum eius voluptatum eos natus minus?
                    </div>
                </section>

            </div>
        </main>

    );
    
}

export default MovieDetails;
