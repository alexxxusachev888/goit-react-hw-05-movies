import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from '../api/tmb-api-service';

const Movies = ()=> {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
   console.log(movies)

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
        </>
   
    )
}

export default Movies;