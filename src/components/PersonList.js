import React from 'react';
import PersonCard from './PersonCard';

const PersonList = ({cast}) => {


    return (
        <div className="person-wrapper custom-slim-scroll">
            {cast.map(person =>(

                <PersonCard person={person}  key={person.id} />

            ))}
        </div>
    )
}

export default PersonList;
