import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList'
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movieSlice.js";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  //console.log(text);
  useEffect(()=>{
    dispatch(fetchAsyncMovies(text));
    dispatch(fetchAsyncShows(text));
  },[dispatch, text]);
  return (
    <div>
        <div className='banner'>
           <label for="textsearch">Search Movies or Shows</label>
           <input type="search" id="textsearch" name="textsearch" value={text}
           onChange={(e) => setText(e.target.value)}
           placeholder='Search here..'/>
            <MovieList text={text} />
        </div>
    </div>
  )
}

export default Home