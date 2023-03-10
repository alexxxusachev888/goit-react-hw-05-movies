
const KEY_API = '0b11624b950ea9c4284f61844023b09c';
const BASE_URL = 'https://api.themoviedb.org/3/';
/* const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
 */
export const fetchTrends = async () => {
  try {
    const response = await fetch(`${BASE_URL}trending/all/day?api_key=${KEY_API}`);
    const data = await response.json();
    return data.results;

  } catch (error) {
    console.log(error);
  }
}

export const fetchMovies = async (movieSearch) => {

  try {
    const response = await fetch(`${BASE_URL}search/movie?api_key=${KEY_API}&query=${movieSearch}&language=en-US&page=1&include_adult=false`)
    const data = await response.json();
    return data.results;

  } catch (error) {
    console.log(error);
  }
}

  export const fetchMovieById = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}?api_key=${KEY_API}&language=en-US`)
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchMovieReviews = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}/reviews?api_key=${KEY_API}&language=en-US&page=1`)
      const data = await response.json();
      return data.results;
  
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchMovieCast = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}/credits?api_key=${KEY_API}&language=en-US&page=1`)
      const data = await response.json();
      return data.cast;
  
    } catch (error) {
      console.log(error);
    }
  }
