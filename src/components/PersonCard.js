import React from 'react';
import { useEffect } from 'react';
import { profileImagePath } from '../api/config';
import ImageNotFound from '../images/not-found.png';

const PersonCard = ({person}) => {

    useEffect (() =>{
        console.log(person);
    }, []);

    function profileImage () {
        
        // check if poster is not null
        if (!person.profile_path) {
           return ImageNotFound;
        } else {
            return `${profileImagePath}/w138_and_h175_face/${person.profile_path}`;
        }
    } 

    return (
        <div className="person">
            <div className="__img">
                <img src={profileImage()} />
            </div>
            <div className="__name">
                <p className="__original">{person.name}</p>
                <p className="__character">{person.character}</p>
            </div>
        </div>
    )
}

export default PersonCard;
