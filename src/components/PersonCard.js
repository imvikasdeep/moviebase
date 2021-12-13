import React from 'react';
import { profileImagePath } from '../api/config';
import { Link } from 'react-router-dom';
import ImageNotFound from '../images/not-found.png';

const PersonCard = ({person}) => {

    function profileImage () {
        
        // check if poster is not null
        if (!person.profile_path) {
           return ImageNotFound;
        } else {
            return `${profileImagePath}/w138_and_h175_face/${person.profile_path}`;
        }
    } 

    return (
        <Link className="person" to={`/person/${person.id}`}>
            <div className="__img">
                <img src={profileImage()} alt={person.name} title={person.name} />
            </div>
            <div className="__name">
                <p className="__original">{person.name}</p>
                <p className="__character">{person.character}</p>
            </div>
        </Link>
    )
}

export default PersonCard;
