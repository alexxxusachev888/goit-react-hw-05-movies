
const KEY_API = '0b11624b950ea9c4284f61844023b09c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const fetchTrends = async () => {
  try {
    const response = await fetch(`${BASE_URL}trending/all/day?api_key=${KEY_API}`).then(resp=> resp.json());
    return response.results;

  } catch (error) {
    console.log(error);
  }
}

export const fetchMovies = async (movieSearch) => {

    try {
      const response = await fetch(`${BASE_URL}search/${movieSearch}?api_key=${KEY_API}&language=en-US&page=1&include_adult=false`)
        .then(resp=> resp.json());

      return response.results;
  
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchMovieById = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}?api_key=${KEY_API}&language=en-US`)
        .then(resp=> resp.json());
      return response;
  
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchMovieReviews = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}/reviews?api_key=${KEY_API}&language=en-US&page=1`)
        .then(resp=> resp.json());
        console.log(response.results)

      return response.results;
  
    } catch (error) {
      console.log(error);
    }
  }

  //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  //https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US


