import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieShowDetails, getIndividualMovieorShow, removeSelectedMovieShow } from '../../features/movieSlice';
import "./MovieDetail.css";
const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getIndividualMovieorShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieShowDetails(imdbID));
    //cleanup function so that plot field of previously visited movie/show gets updated on new visit
    return () => {
      dispatch(removeSelectedMovieShow());
    }
  }, [dispatch, imdbID]);
  return (
    <div className='movie-detail'>
      {Object.keys(data).length === 0 ? (
        <div><h1 style={{color: "whitesmoke"}}>Loading...</h1></div>
      ) : (
        <>
          <div className='movie-left'>
            <div className='movie-title'>{data.Title}</div>
            <div className='movie-rating'>
              <span>IMDB rating: <i className='fa fa-star'></i>: {data.imdbRating}</span>
              <span>IMDB Votes: <i className='fa fa-thumbs-up'></i>: {data.imdbVotes}</span>
              <span>Runtime: <i className='fa fa-film'></i>: {data.Runtime}</span>
              <span>Year: <i className='fa fa-calendar'></i>: {data.Year}</span>
            </div>
            <div className='movie-plot'>{data.Plot}</div>
            <div className='movie-info'>
              <div><span>Director:  </span> <span> {data.Director}</span></div>
              <div><span>Cast:  </span> <span>{data.Actors}</span></div>
              <div><span>Genres:  </span> <span>{data.Genre}</span></div>
              <div><span>Languages:  </span> <span>{data.Language}</span></div>
              <div><span>Awards:  </span> <span>{data.Awards}</span></div>
            </div>
          </div>
          <div className='movie-right'>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}

    </div>
  );
}

export default MovieDetail