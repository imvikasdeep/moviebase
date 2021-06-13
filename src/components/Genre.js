import React, {useState, useEffect} from 'react';
import { API_KEY, API_URL } from '../api/config';
import { Link } from 'react-router-dom';

const Navigation = () => {

    useEffect(() => {
        fetchGenre();
    }, []);

    const [genres, setGenre] = useState([]);

    const fetchGenre = async () => {
        const data = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
        const response = await data.json();

        // Add genres to state
        setGenre(response.genres);
    }


    return(
        
        <ul className="submenu">
            {genres.map(genre => (
                <li key={genre.id}><Link to={genre.id}>{genre.name}</Link></li>
            ))}
        </ul>
        
    );
}

export default Navigation;
