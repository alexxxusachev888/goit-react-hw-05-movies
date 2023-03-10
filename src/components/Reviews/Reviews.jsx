import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../api/tmb-api-service';

const Reviews = ()=> {
  const { movieId } = useParams();
  const [ reviews, setReviews] = useState([]);

  useEffect(()=>{
    const foundMovieReviews = async (movId) => {
        try {
          const movieRvs = await fetchMovieReviews(movId);
          setReviews(movieRvs);

        } catch (error) {
          console.log(error);
        }
    }

    foundMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
    {reviews.map(({username, content})=> {
        return (
            <>
            <div>
                <p>{username}</p>
                <p>{content}</p>
            </div>
            </>
        )

    })}
    </>
  )

}

export default Reviews;