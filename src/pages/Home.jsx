import { useState, useEffect } from 'react';
import {fetchTrends} from '../api/tmb-api-service';
import MovieList from '../components/MovieList/MovieList';


const Home = ()=> {
const [movies, setTrendingMovies] = useState([]);

    useEffect(()=>{
        const trendingMoviesArr = async () => {
            try {
              const movieArr = await fetchTrends();
              setTrendingMovies(movieArr);

            } catch (error) {
              console.log(error);
            }
        }

        trendingMoviesArr();
    },[])

    return (
        <>
        <h1>Home Page</h1>
        <MovieList movieArr={movies}/>
        </>
    )
}

export default Home;