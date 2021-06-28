import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ( {currentPage, totalPages} ) => {

    const pageUrl = window.location.pathname;

    return (

        <div className="pagination">
            
            {currentPage === 1 || currentPage === 0 ? null : (
                <Link to={`${pageUrl}?page=${currentPage-1}`} className="button" >Prev</Link>
            )}

            {currentPage === totalPages ? null : (
                <Link to={`${pageUrl}?page=${currentPage + 1}`} className="button" >Next</Link>
            )}

        </div>

    );
    
}

export default Pagination;
