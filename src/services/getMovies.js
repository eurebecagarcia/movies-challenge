import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie";

const API_KEY = "122ef799e1f72f0eecd093f189200faf";

export const getMovies = (data) =>
  axios({
    url: `${API_URL}/${data}/?api_key=${API_KEY}`,
    method: "get",
  });
