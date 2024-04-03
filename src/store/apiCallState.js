import { reactive } from "vue"; //IMPORT REACTIVE FROM VUEJS
import axios from "axios"; //Import Axios to Get CALLS

export const productCallState = reactive({
  products_url: "https://api.themoviedb.org/3/search/",
  api_key: "a7a4b4caa5e08038dbfe54a434870657",
  Movies: [],
  TvShows: [],
  getMovies(url) {
    axios.get(url).then((response) => {
      console.log(response);
      this.Movies = response.data.results;
    });
  },
  getTvShows(url) {
    axios.get(url).then((response) => {
      console.log(response);
      this.TvShows = response.data.results;
    });
  },
});
