import React from 'react'
import "./MovieCard.css";
import {Link} from "react-router-dom";
const MovieCard = ({data}) => {
  return (
    <div className='movie-item'>
     <Link to={`/movie/${data.imdbID}`} >
      <div className='movie-inner'>
        <div className='movie-top'>
          <img src={data.Poster} alt={data.Title}/>
        </div>
        <div className='movie-bottom'>
          <div className='info'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
     </Link>
    </div>
  )
}

export default MovieCard