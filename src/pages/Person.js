import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, profileImagePath } from '../api/config';
import Loader from '../components/Loader';
import Error from '../components/Error';
import ImageNotFound from '../images/not-found.png';

const Person = ({match}) => {

    const personId = match.params.id;

    const [person, setPerson] = useState();

    const [loading, setLoading] = useState(1);
    const [error, setError] = useState(0);

    function profileImage () {
        
        // check if poster is not null
        if (!person.profile_path) {
           return ImageNotFound;
        } else {
            return `${profileImagePath}/h632/${person.profile_path}`;
        }
    } 

    useEffect (() => {
        
    // Fetch Person details
    let fetchPersonDetails = async () => {
        await fetch(`${API_URL}/person/${personId}?api_key=${API_KEY}`)
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data');
            }
            return res.json();
        })
        .then(data => {
            setPerson(data);
            setLoading(0);
        })
        .catch(err => {
            setLoading(0);
            setError(1);
        })
    
    }

        fetchPersonDetails();
        // console.log(person);
    }, [personId]);

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
        <main className="personDetails">
            
            <div className="container">
                <div className="content">
                    <div className="profile_img">
                        <img src={profileImage()} alt={person.name}/>
                    </div>
                    <div className="profile_">

                    </div>
                </div>
            </div>

        </main>
    )
}

export default Person;