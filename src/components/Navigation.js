import React from 'react';
import { Link } from 'react-router-dom';
import Genres from './Genres';
import Search from './Search';

const Navigation = ({settoggleMenu, toggleMenu}) => {

    return(
        <nav className="navbar-nav">
                        
            <ul>
                <li className="dropdown">
                    <Link to="trending" onClick={() => settoggleMenu(!toggleMenu)}>Trending</Link>
                </li>
                <li className="dropdown">
                    <Link to="top-rated" onClick={() => settoggleMenu(!toggleMenu)}>Top-rated</Link>
                </li>
                <li className="dropdown">
                    <Link to="upcoming" onClick={() => settoggleMenu(!toggleMenu)}>Unpcoming</Link>
                </li>
                <li className="dropdown">
                    <Link to={{
                        hash: "#"
                    }} exact="true" >Genre <span className="material-icons-outlined">expand_more</span></Link>
                    <Genres settoggleMenu={settoggleMenu}  toggleMenu={toggleMenu}/>
                </li>
            </ul>
            
            <Search />

        </nav>
    );
}

export default Navigation;
