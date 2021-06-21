import React from 'react';
import { Link } from 'react-router-dom';
import Lostbg from '../images/404.jpg';

const Error = () => {


    return (

        <div className="pagenotfound" style={{ backgroundImage: `url(${Lostbg})` }}>
            <h1>Oops!</h1>
            <h2>Something went wrong. Could not fetch movies. Try again later.</h2>
            <Link className="button" to="/">Return home</Link>
        </div>

    );
    
}

export default Error;
