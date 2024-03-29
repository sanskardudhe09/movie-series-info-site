import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movieSlice'
import MovieCard from "../MovieCard/MovieCard.js"
import './MovieList.css';
const MovieList = ({text}) => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  //console.log(movies);
  let movieRender = movies.Response === "True" ? (
    movies.Search.map((movie, index)=>{
      return <MovieCard key={index} data={movie}/>
    })
  ) : (
    <div className="movie-err">
      <h3> {movies.Error}</h3>
    </div>
  );
  let showsRender = shows.Response === "True" ? (
    shows.Search.map((movie, index)=>{
      return <MovieCard key={index} data={movie}/>
    })
  ) : (
    <div className="movie-err">
      <h3> {shows.Error}</h3>
    </div>
  );
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{movieRender}</div>
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>{showsRender}</div>
      </div>
    </div>
  )
}

export default MovieList