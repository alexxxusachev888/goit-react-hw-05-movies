import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {fetchTrends} from '../api/tmb-api-service';


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
        {movies.map((item)=> (<Link to={`/movies/${item.id}`}><p>{item.title}</p></Link>))}
        </>
    )
}

export default Home;