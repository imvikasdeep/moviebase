import React from 'react';
import { posterURL } from '../api/config';

const Card = ({ movieData }) => {

    const releaseDate = movieData.release_date;
    const movieYear = releaseDate.slice(0,4);

    function adult() {
        if(movieData.adult) {
            return <li>18+</li>;
        }
    }

    return (

        <div className="card" key={movieData.id}>
            <span className="card__rating">
                <i className="material-icons-outlined">star</i>
                {movieData.vote_average}
            </span>
            <a href="./details.html" className="card__cover">
                <img src={`${posterURL}/w300/${movieData.poster_path}`} className="img-responsive" alt={movieData.original_title} />
            </a>
            <h2 className="card__title">
                <a href="./details.html">{movieData.original_title}</a>
            </h2>
            <ul className="card__list">
                {adult()}
                <li>{movieYear}</li>
            </ul>
        </div>
                
    )
};

export default Card;