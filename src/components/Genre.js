import React, {useState, useEffect} from 'react';
import { API_KEY, API_URL } from '../api/config';
import { Link } from 'react-router-dom';

const Genre = () => {

    useEffect(() => {
        fetchGenre();
    }, []);

    const [genres, setGenre] = useState([]);
    const [error, setError] = useState(null);

    const fetchGenre = async () => {
        fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then(res => {
            console.log(res);
            if(!res.ok) {
                throw Error('Could not fetch the data');
            }
            return res.json();
        })
        .then(data => {
            setGenre(data.genres);
        })
        .catch(err => {
            setError(err.message);
        })
    }


    return(
        
        <ul className="submenu">
            { error && <div>{error}</div>}
            {genres.map(genre => (
                <li key={genre.id}><Link to={`/${genre.id}`}>{genre.name}</Link></li>
            ))}
        </ul>
        
    );
}

export default Genre;
