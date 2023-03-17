import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchMovies } from '../api/tmbApiService';
import { debounce } from "lodash";

import MovieList from '../components/MovieList/MovieList';
import SearchField from '../components/SearchField/SearchField';
import Pagination from '../components/Pagination/Pagination';

const Movies = ()=> {
    const location = useLocation();
    const [movies, setMovies] = useState({ results: [] });
    const [searchParams, setSearchParams] = useSearchParams({
      query: '',
      page: 1,
    });
    const query = searchParams.get('query') ?? '';
    const pageNum = Number(searchParams.get('page'))
    console.log(query);
    console.log(pageNum);

    useEffect(()=>{
        const foundMoviesOnSearch = async (request) => {
            try {
              const movieArr = await fetchMovies(request, pageNum);
              setMovies(movieArr);

            } catch (error) {
              console.log(error);
            }
        }

        const debouncedSearch = debounce(foundMoviesOnSearch, 400);
        debouncedSearch(query);

        return () => debouncedSearch.cancel();
    },[query, pageNum])

    const updateQueryString = (query) => {
        const nextQuery = query !== "" ? { query, page: 1 } : {};
        setSearchParams(nextQuery);
      };

    return (
        <>
        <SearchField value={query} queryString={updateQueryString}/>
        {movies.results.length ? <>
        <MovieList movieArr={movies.results} location={location}/>
        <Pagination 
          itemsPerPage={20}
          totalItems={movies.total_results}
          setSearchParams={setSearchParams}
          params={searchParams}
          location={location}/>
        </> : <img style={{height: '550px'}}src='https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif' alt='waiting cat'/>}
        </>
    )
}

export default Movies;

//https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif