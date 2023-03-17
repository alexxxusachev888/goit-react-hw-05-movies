import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { fetchMovieReviews } from '../../api/tmbApiService';
import shortReview from '../../utils/makeItShort';
import { ReviewsWrapper, ReviewCard, InnerWrapper, Author, Content } from './Reviews.styled';


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
    
    <ReviewsWrapper>
    {reviews.length ? reviews.map(({id, author, content})=> {
          return (
              <ReviewCard key={id}>
                  <InnerWrapper>
                    <RxAvatar size={32} style={{color: '#B1A296'}}/>
                    <Author>{author}</Author>
                  </InnerWrapper>
                 <Content>{shortReview(content)}</Content>
              </ReviewCard>
          )
      }) : <div style={{display: 'flex'}}>
        <img src='https://media0.giphy.com/media/QPQ3xlJhqR1BXl89RG/200.webp?cid=ecf05e47oeisg3o2v6zfwr5kukig5sa97vyumtbagi4uuum0&rid=200.webp&ct=g' alt='waiting for reviews'/>
        <img src='https://media0.giphy.com/media/QPQ3xlJhqR1BXl89RG/200.webp?cid=ecf05e47oeisg3o2v6zfwr5kukig5sa97vyumtbagi4uuum0&rid=200.webp&ct=g' alt='waiting for reviews'/>
        <img src='https://media0.giphy.com/media/QPQ3xlJhqR1BXl89RG/200.webp?cid=ecf05e47oeisg3o2v6zfwr5kukig5sa97vyumtbagi4uuum0&rid=200.webp&ct=g' alt='waiting for reviews'/>
        <img src='https://media0.giphy.com/media/QPQ3xlJhqR1BXl89RG/200.webp?cid=ecf05e47oeisg3o2v6zfwr5kukig5sa97vyumtbagi4uuum0&rid=200.webp&ct=g' alt='waiting for reviews'/>
        <img src='https://media0.giphy.com/media/QPQ3xlJhqR1BXl89RG/200.webp?cid=ecf05e47oeisg3o2v6zfwr5kukig5sa97vyumtbagi4uuum0&rid=200.webp&ct=g' alt='waiting for reviews'/>
        </div>}
    </ReviewsWrapper>
  )

}

export default Reviews;