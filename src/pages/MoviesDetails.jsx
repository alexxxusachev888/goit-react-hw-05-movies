import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from '../api/tmb-api-service';

const MoviesDetails = ()=> {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(()=> {
        const foundMovieDetails = async (movId) => {
            try {
              const movieDtl = await fetchMovieById(movId);
              setMovieDetails(movieDtl);

            } catch (error) {
              console.log(error);
            }
        }

        foundMovieDetails(movieId);

    }, [movieId])


    return (
        <>
        <h1>Movies Details Page</h1>

        <p>{movieDetails.original_title}</p>
        <p>{movieDetails.overview}</p>

        <nav>
            <Link to='reviews'>Reviews</Link>
            <Link to='cast'>Cast</Link>
        </nav>
            <Outlet/>       
        </>
        
    )
}

export default MoviesDetails;