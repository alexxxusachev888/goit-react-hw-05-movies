import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchMovies } from '../api/tmbApiService';
import { debounce } from "lodash";
import MovieList from '../components/MovieList/MovieList';
import SearchField from '../components/SearchField/SearchField';

const Movies = ()=> {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
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

        const debouncedSearch = debounce(foundMoviesOnSearch, 400);
        debouncedSearch(query);

        return () => debouncedSearch.cancel();
    },[query])

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
      };

    return (
        <>
        <SearchField value={query} queryString={updateQueryString}/>
        {movies.length ? <MovieList movieArr={movies} location={location}/> : <img style={{height: '550px'}}src='https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif' alt='waiting cat'/>}
        </>
    )
}

export default Movies;

//https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif