import { reactive } from "vue";
import { productCallState } from "./apiCallState";
export const productShowState = reactive({
  userInput: "",
  errorMessage: "",
  productCallState,
  /**
   * Function just to invoke both "GET" method to keep Movies & tvShows
   */
  getMoviesTvShow() {
    this.getMovies();
    this.getTvSeries();
    this.resetUserInput();
    setTimeout(() => {
      //RICORDA: le chiamate non sono istantanee e perciò devi dare del tempo ai controlli di funzionare correttamente sulle array restituite.
      if (
        this.productCallState.Movies.length === 0 &&
        this.productCallState.TvShows.length === 0
      ) {
        this.getInputError();
      } else {
        this.errorMessage = "";
      }
    }, 1000);
  },

  getInputError() {
    this.errorMessage = "0 titles found";
  },

  /**
   * Function to keep Movies from "GET" method
   */
  getMovies() {
    if (this.userInput != "") {
      this.productCallState.getMovies(
        `${this.productCallState.products_url}movie?api_key=${this.productCallState.api_key}&query=${this.userInput}`
      );
    }
  },
  /**
   * Function to keep TvShows from "GET" method
   *
   */
  getTvSeries() {
    if (this.userInput != "") {
      this.productCallState.getTvShows(
        `${this.productCallState.products_url}tv?api_key=${this.productCallState.api_key}&query=${this.userInput}`
      );
    }
  },
  /**
   * Control if "EL" is null or not.
   * @param {Object} el
   */
  nullChecker(el) {
    if (el != null) {
      return el;
    } else {
      return "-";
    }
  },
  /**
   * Count "i" just to appear Stars for "vote" object
   * @param {Object} vote
   * @param {Number} i
   */
  getIntVote(vote, i) {
    if (i <= vote) {
      return "fa-solid fa-star";
    } else if (i == Math.ceil(vote) && vote % 1 !== 0.0) {
      return "fa-solid fa-star-half-stroke";
    } else {
      return "fa-regular fa-star";
    }
  },
  resetUserInput() {
    this.userInput = "";
  },
});
