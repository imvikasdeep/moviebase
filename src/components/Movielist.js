import React from 'react'
import Card from './Card';

const Movielist = ({movies, swipeClass}) => {

    return (
        
        <div className={`cards-wrapper ${swipeClass ? swipeClass : ``}`}>

            {movies.map(movie => (
                
                <Card movieData={movie} key={movie.id} />

            ))}
            
        </div>
                
    )
};

export default Movielist;