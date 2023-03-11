import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchMovies } from '../api/tmb-api-service';
import MovieList from '../components/MovieList/MovieList';

const Movies = ()=> {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const location = useLocation();

    useEffect(()=>{
        const foundMoviesOnSearch = async (request) => {
            try {
              const movieArr = await fetchMovies(request);
              setMovies(movieArr);

            } catch (error) {
              console.log(error);
            }
        }

        foundMoviesOnSearch(query);
    },[query])

    return (
        <>
        <h1>Movies Page</h1>
        
        <form >
            <input type='text' value={query ?? ''} onChange={(evt) => {setSearchParams({query: evt.target.value})}}/>
            <button type='submit'>Search</button>
        </form>

        <MovieList movieArr={movies} location={location}/>
        </>
   
    )
}

export default Movies;