import React, {useState, useEffect} from 'react';
import { API_KEY, API_URL } from '../api/config';
import { Link } from 'react-router-dom';

const Genres = ({settoggleMenu, toggleMenu}) => {

    useEffect(() => {
        fetchGenre();
    }, []);

    const [genres, setGenre] = useState([]);
    const [error, setError] = useState(null);

    const fetchGenre = async () => {
        await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then(res => {
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
                <li key={genre.id}>
                    <Link exact="true" onClick={() => settoggleMenu(!toggleMenu)} to={{
                                pathname: `/genre/${genre.name.toLowerCase().replace(/ /g, `-`)}`
                            }}
                    >{genre.name}</Link>
                </li>
            ))}
        </ul>
        
    );
}

export default Genres;
