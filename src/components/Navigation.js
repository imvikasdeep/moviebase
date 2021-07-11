import React from 'react';
import { Link } from 'react-router-dom';
import Genres from './Genres';
import Search from './Search';

const Navigation = () => {

    return(
        <nav className="navbar-nav">
                        
            <ul>
                <li className="dropdown">
                    <Link to="trending">Trending</Link>
                </li>
                <li className="dropdown">
                    <Link to="top-rated">Top-rated</Link>
                </li>
                <li className="dropdown">
                    <Link to="upcoming">Unpcoming</Link>
                </li>
                <li className="dropdown">
                    <Link to={{
                        hash: "#"
                    }} exact="true" >Genre <span className="material-icons-outlined">expand_more</span></Link>
                    <Genres />
                </li>
            </ul>
            
            <Search />

        </nav>
    );
}

export default Navigation;
