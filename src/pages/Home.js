import React, {useState, useEffect} from 'react';
import Movielist from '../components/Movielist';
import { API_KEY, API_URL } from '../api/config';

const Home = () => {

    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    const fetchTrendingMovies = async () => {
        const data = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
        const resposnse = await data.json();

        setTrending(resposnse.results);
        
    }

    const fetchTopRatedMovies = async () => {
        const data = await fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}`);
        const resposnse = await data.json();

        setTopRated(resposnse.results);
        
    }
    
    const fetchUpcomingMovies = async () => {
        const data = await fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}`);
        const resposnse = await data.json();

        setUpcoming(resposnse.results);
        
    }
    
    useEffect(() => {
        fetchTrendingMovies();
        fetchTopRatedMovies();
        fetchUpcomingMovies();
    }, []);


    return (

        <main className="wrapper">
            <div className="container">

                {trending !== undefined && trending !== null && trending.length !== 0 ? (
                    <React.Fragment>
                        <div className="content">
                            <div className="heading">
                                <h1>Trending</h1>
                            </div>
                        </div>

                        <Movielist movies={trending.slice(0, 5)} swipeClass="swipe"/>
                    </React.Fragment>
                ) : (
                    <div className="content">
                        <div className="heading">
                            <h1>Could not load trending movies</h1>
                        </div>
                    </div>
                )}

                {topRated !== undefined && topRated !== null && topRated.length !== 0 ? (
                    <React.Fragment>
                        <div className="content">
                            <div className="heading">
                                <h1>Top Rated</h1>
                            </div>
                        </div>

                        <Movielist movies={topRated.slice(0, 5)} swipeClass="swipe"/>
                    </React.Fragment>
                ) : (
                    <div className="content">
                        <div className="heading">
                            <h1>Could not load Top Rated movies</h1>
                        </div>
                    </div>
                )}

                
                {upcoming !== undefined && upcoming !== null && upcoming.length !== 0 ? (
                    <React.Fragment>
                        <div className="content">
                            <div className="heading">
                                <h1>Upcoming</h1>
                            </div>
                        </div>

                        <Movielist movies={upcoming.slice(0, 5)} swipeClass="swipe"/>
                    </React.Fragment>
                ) : (
                    <div className="content">
                        <div className="heading">
                            <h1>Could not load Upcoming movies</h1>
                        </div>
                    </div>
                )}    
    

            </div>
        </main>

    );
    
}

export default Home;
