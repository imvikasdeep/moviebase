import React from 'react';
import { Link } from 'react-router-dom';
import Lostbg from '../images/404.jpg';

const Lost = () => {


    return (

        <div class="pagenotfound" style={{ backgroundImage: `url(${Lostbg})` }}>
            <h1>404</h1>
            <h2>Oops! Looks looks like there's no movie here</h2>
            <Link class="button" to="/">Return home</Link>
        </div>

    );
    
}

export default Lost;
