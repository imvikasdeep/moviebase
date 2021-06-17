import React from 'react';
import { posterURL } from '../api/config';
import { Link } from 'react-router-dom';

const Card = ({ movieData }) => {

    // Get the year from movie release date
    let release_year = movieData.release_date;
    release_year = new Date(release_year).getFullYear();

    const posterPath = `${posterURL}/w300/${movieData.poster_path}`;

    return (

        <div className="card" key={movieData.id}>
            <span className="card__rating">
                <i className="material-icons-outlined">star</i>
                {movieData.vote_average}
            </span>
            <Link to={`/movie/${movieData.id}`} className="card__cover">
                <img src={posterPath} className="img-responsive" alt={movieData.original_title} />
            </Link>
            <h2 className="card__title">
                <Link to={`/movie/${movieData.id}`}>{movieData.original_title}</Link>
            </h2>
            <ul className="card__list">
                {movieData.adult && <li>18+</li>}
                <li>{release_year}</li>
            </ul>
        </div>
                
    )
};

export default Card;