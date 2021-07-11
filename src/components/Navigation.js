import React from 'react';
import { Link } from 'react-router-dom';
import Genres from './Genres';
import Search from './Search';

const Navigation = ({toggleMenu}) => {

    return(
        <nav className="navbar-nav">
                        
            <ul>
                <li className="dropdown">
                    <Link to="/trending" onClick={toggleMenu}>Trending</Link>
                </li>
                <li className="dropdown">
                    <Link to="/top-rated" onClick={toggleMenu}>Top-rated</Link>
                </li>
                <li className="dropdown">
                    <Link to="/upcoming" onClick={toggleMenu}>Unpcoming</Link>
                </li>
                <li className="dropdown">
                    <Link to={{
                        hash: "#"
                    }} >Genre <span className="material-icons-outlined">expand_more</span></Link>
                    <Genres toggleMenu={toggleMenu}/>
                </li>
            </ul>
            
            <Search toggleMenu={toggleMenu}  />

        </nav>
    );
}

export default Navigation;
