import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrends, fetchGenres } from '../api/tmbApiService';
import MovieList from '../components/MovieList/MovieList';

const Home = ()=> {
  const [movies, setTrendingMovies] = useState([]);
  const location = useLocation();
  

    useEffect(()=>{
        const trendingMoviesArr = async () => {
            try {
              const movieArr = await fetchTrends();
              setTrendingMovies(movieArr);
              

            } catch (error) {
              console.log(error);
            }
        }
        
        fetchGenres();
        trendingMoviesArr();
    },[])

    return (
        <>
        <MovieList movieArr={movies} location={location}/>
        </>
    )
}

export default Home;
