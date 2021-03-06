import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../images/logo.png';

const Header = () => {

    const [toggleMenu, settoggleMenu] = useState(0); /// initially flase indicates menu closed


    const handleMenu = () => {
        settoggleMenu(!toggleMenu);
    }

    
    /// Handle moblie menu drawer
    const openMenu = toggleMenu ? 'open' : '';
    

    return(
        <header className="header">
            <div className="container">

                <div className={`navbar ${openMenu}`}>
                    <Link to="/" className="brand-logo">
                        <img src={logo} className="img-responsive" alt="" />
                    </Link>

                    <div className="nav-burger" onClick={handleMenu}>
                        <span className="burger-bar bar-1"></span>
                        <span className="burger-bar bar-2"></span>
                        <span className="burger-bar bar-3"></span>
                    </div>

                    <Navigation toggleMenu={handleMenu}/>

                </div>

            </div>
        </header>
    );
}

export default Header;
