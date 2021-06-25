import React from 'react';
import { posterURL } from '../api/config';
import { Link } from 'react-router-dom';
import ImageNotFound from '../images/not-found.png';

const Card = ({ movieData }) => {

    // Get the year from movie release date
    let release_year = movieData.release_date;
    release_year = new Date(release_year).getFullYear();

    function poster () {
        
        // check if poster is not null
        if (!movieData.poster_path) {
           return ImageNotFound;
        } else {
            return `${posterURL}/w300/${movieData.poster_path}`;
        }
    } 

    return (

        <div className="card" key={movieData.id}>
            <span className="card__rating">
                <i className="material-icons-outlined">star</i>
                {movieData.vote_average}
            </span>
            <Link to={`/movie/${movieData.id}`} className="card__cover">
                <img src={poster()} className="img-responsive" alt={movieData.original_title} />
            </Link>
            <h2 className="card__title">
                <Link to={`/movie/${movieData.id}`}>{movieData.original_title}</Link>
            </h2>
            <ul className="card__list">
                {movieData.adult && <li>18+</li>}
                <li>{!isNaN(release_year) && release_year}</li>
            </ul>
        </div>
                
    )
};

export default Card;