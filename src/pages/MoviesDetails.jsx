import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from '../api/tmb-api-service';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const MoviesDetails = ()=> {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();

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

    return (<MovieDetails 
                movieId={movieId} 
                movieDetails={movieDetails}
                location={location}
            />)
}

export default MoviesDetails;