import React from 'react';

const Footer = () => {

    return(
        <footer className="footer">
            <div className="container">
                <div className="attribution">
                    <div className="brand-logo">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" className="img-responsive" alt="TMDB" />
                    </div>
                    <h4>This product uses the TMDb API but is not endorsed or certified by TMDb.</h4>
                </div>
                <div className="copyright">
                    <h4>&#169; MOVIEBASE</h4>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
