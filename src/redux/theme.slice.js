import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  
  name: "theme",

  initialState:{
    mode: "browser",
  },

  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setDarkMode, setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
