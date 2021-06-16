import React from 'react';
import { Link } from 'react-router-dom';
import Genre from './Genre';

const Navigation = () => {

    return(
        <nav className="navbar-nav">
                        
            <ul>
                <li className="dropdown">
                    <Link to={{
                        hash: "#"
                    }} exact="true" >Genre <span className="material-icons-outlined">expand_more</span></Link>
                    <Genre />
                </li>
            </ul>
            
            <form className="searchform">
                <div className="search__group">
                    <input type="text" className="search__input" placeholder="Search" />
                    <button type="submit">
                        <i className="material-icons-outlined">search</i>
                    </button>
                </div>
            </form>

        </nav>
    );
}

export default Navigation;
