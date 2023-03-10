import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../api/tmb-api-service';

const Cast = ()=> {
  const { movieId } = useParams();
  const [ cast, setCast] = useState([]);

  useEffect(()=>{
    const foundMovieCast = async (movId) => {
        try {
          const movieCast = await fetchMovieCast(movId);
          setCast(movieCast);

        } catch (error) {
          console.log(error);
        }
    }

    foundMovieCast(movieId);
  }, [movieId]);

  return (
    <>
    {cast.map(({name, character})=> {
        return (
            <>
            <div>
                <p>{name}</p>
                <p>{character}</p>
            </div>
            </>
        )

    })}
    </>
  )

}

export default Cast;