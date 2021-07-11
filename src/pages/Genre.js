import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import Movielist from '../components/Movielist';
import Loader from '../components/Loader';
import Pagination from '../components/pagination';
import { API_KEY, API_URL } from '../api/config';
import { useLocation } from 'react-router';

const Genre = ({match}) => {

    let genreName = match.params.type.replace(/-/g, ' ');

    const parsed = queryString.parse(useLocation().search);
    let pageNo = parsed.page || 1;

    const [movies, setMovies] = useState({
        results: []
    });
    const [loading, setLoading] = useState(1);

    

    

    
    useEffect(() => {
        
        window.scrollTo(0, 0);
        
        let fetchMovies = async (genreId) => {
            setLoading(1);
            let data = await fetch(`${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${pageNo}`);
            let resposnse = await data.json();
    
            setMovies(resposnse);
            setLoading(0);
        }

        
        const getData = async () => {
            let data = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
            let resposnse = await data.json();
            
            let filterGenre = resposnse.genres.find(genre => genre.name.toLowerCase() === genreName);
            
            if (!filterGenre || filterGenre === undefined) {
                console.log('error');
            } else {
                fetchMovies(filterGenre.id);
            }
        }

        getData();
    }, [genreName, pageNo]);



    if (loading) {
        return(
            <Loader />
        );
    }


    return (

        <main className="wrapper">
            <div className="container">

                <div className="content">
                    <div className="heading">
                        <h1>{genreName} Movies</h1>
                    </div>
                </div>

                <Movielist movies={movies.results} />
                
                <Pagination currentPage={movies.page} totalPages={movies.total_pages}/>

            </div>
        </main>

    );
    
}

export default Genre;
