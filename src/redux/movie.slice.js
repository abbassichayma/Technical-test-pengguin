import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  
  name: "movies",

  initialState:{
    watchList:[],
    movies: [],
    
  },
  
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    AddToWatchList: (state, action) => {
    
      state.watchList.push(...state.movies.filter(el=>el.id===action.payload))
    },
    deleteFromWatchList: (state, action) => {
      state.watchList=state.watchList.filter(el=>el.id!=action.payload)
    },
  },
});

export const { getMovies,AddToWatchList,deleteFromWatchList } = movieSlice.actions;

export default movieSlice.reducer;