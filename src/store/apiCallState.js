import { reactive } from "vue"; //IMPORT REACTIVE FROM VUEJS
import axios from "axios"; //Import Axios to Get CALLS

export const productCallState = reactive({
  products_url: "https://api.themoviedb.org/3/search/",
  cover_url: "https://image.tmdb.org/t/p/",
  api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
  Movies: [],
  TvShows: [],
  getMovies(url) {
    axios.get(url).then((response) => {
      this.Movies = response.data.results;
      console.log(this.Movies);
    });
  },
  getTvShows(url) {
    axios.get(url).then((response) => {
      this.TvShows = response.data.results;
      console.log(this.TvShows);
    });
  },
});
