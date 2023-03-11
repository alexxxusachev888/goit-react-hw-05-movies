import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

const MovieDetails = ({movieId, movieDetails, location})=> {
    //const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
    const backLinkHref = location.state?.from ?? "/movies";

    return(
        <>
        <Link to={backLinkHref}> Back to Movies</Link>
        <h1>Movies Details Page</h1>
        <p>{movieDetails.original_title}</p>
        <p>{movieDetails.popularity}</p>
        <p>{movieDetails.overview}</p>
        
        {/* <img src={`${BASE_URL_IMG}${movieDetails.backdrop_path}`} alt="movieDetails.original_title" />
        <p>{movieDetails.original_title}</p>
        <p>{movieDetails.popularity}</p>
        <p>{movieDetails.overview}</p>
        <p>{movieDetails.genres}</p> */}

        <nav>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </nav>

        <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet/>   
        </Suspense>
               
        </>
    )


}

export default MovieDetails;