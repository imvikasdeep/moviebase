import React from 'react'
import Card from './Card';

const Movielist = ({movies}) => {
    return (
        
        <div className="cards-wrapper">

            {movies.map(movie => (
                
                <Card movieData={movie} />

            ))}
            
        </div>
                
    )
};

export default Movielist;