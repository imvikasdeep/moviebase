import React from 'react';

const Navigation = () => {

    return(
        <nav className="navbar-nav">
                        
            <ul>
                <li className="dropdown">
                    <a href="#">Genre <span className="material-icons-outlined">expand_more</span></a>
                    <ul className="submenu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Thriller</a></li>
                        <li><a href="#">Mistory </a></li>
                    </ul>
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
