import { NavLink } from 'react-router-dom';

const MovieList = ({movieArr, location})=> {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

    return(
        <ul>
            {movieArr.map(({id, title, vote_average, backdrop_path, genre_ids, release_date})=> {
                return (
                    <li key={id}>
                        <NavLink to={`/movies/${id}`} state={{from: location}} >
                            <img src={`${BASE_URL_IMG}${backdrop_path}`} alt={title}/>
                                </NavLink>
                        <h2>{title}</h2>
                        <p>{vote_average}</p>
                        <p>{genre_ids}</p>
                        <p>{release_date}</p>
                    </li>
                )
            })}
        </ul>)
}

export default MovieList;

