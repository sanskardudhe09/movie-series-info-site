import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Api from ".././common/apis/Api.js";
//import {apiKey} from '.././common/apis/ApiKey.js';

const initialState = {
    movies: {},
    shows: {},
    selectedMovieorShow: {},
}
//async action creater using redux thunk middleware
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (text)=>{
    var movieText = "";
    if(text !== ""){
        movieText = text;
    }else{
        movieText = "Harry";
    }
    const res = await Api.get(`?apiKey=${process.env.REACT_APP_ApiKey}&s=${movieText}&type=movie`)
    .catch((err)=>{
      console.log(err);
    })
    console.log(res);
    return res.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (text)=>{
    var seriesText = "";
    if(text !== ""){
        seriesText = text;
    }else{
        seriesText = "friends";
    }
    const res = await Api.get(`?apiKey=${process.env.REACT_APP_ApiKey}&s=${seriesText}&type=series`)
    .catch((err)=>{
      console.log(err);
    })
    console.log(res);
    return res.data;
})

export const fetchAsyncMovieShowDetails = createAsyncThunk('movies/fetchAsyncMovieShowDetail', async (id)=>{
    //const seriesText = "friends";
    const res = await Api.get(`?apiKey=${process.env.REACT_APP_ApiKey}&i=${id}&Plot=full`)
    .catch((err)=>{
      console.log(err);
    })
    console.log(res);
    return res.data;
})

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        /*addMovie: (state, {payload}) => {
            state.movies = payload;
            //In redux toolkit above statement is equal to {...state, payload}
            //redux toolkit automatically creates copy of object before any changes, in old redux ...state is mandatory     
        },*/
        removeSelectedMovieShow: (state) => {
            state.selectedMovieorShow = {};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{

        },
        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            console.log("Fetched Successfully!!");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log("Rejected the Request!!");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!!");
            return {...state, shows: payload};
        },
        [fetchAsyncMovieShowDetails.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully!!");
            return {...state, selectedMovieorShow: payload};
        }
    }
})
export const {removeSelectedMovieShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getIndividualMovieorShow = (state) => state.movies.selectedMovieorShow;
export default movieSlice.reducer;