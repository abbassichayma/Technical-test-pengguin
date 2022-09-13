import axios from "axios";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  
  params: {
    api_key:"ff90ae89c1f34d50bab65abc601282dd",
    // api_key:process.env.REACT_APP_API_KEY,
  },
});

