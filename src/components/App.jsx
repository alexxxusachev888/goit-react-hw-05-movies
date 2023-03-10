import { Routes, Route, Link} from "react-router-dom";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MoviesDetails from "../pages/MoviesDetails";
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast'

export const App = () => {
  return (
    <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:movieId' element={<MoviesDetails />}>
          <Route path='reviews' element={<Reviews />}/>
          <Route path='cast' element={<Cast />}/>
        </Route>
         

{/*         <Route path="*" element={<Home />} />
 */}      </Routes>
    </>
  );
};
