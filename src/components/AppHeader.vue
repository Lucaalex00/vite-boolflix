<script>
import { productCallState } from "../store/apiCallState" //API import
export default {
    name: "AppHeader",
    data() {
        return {
            productCallState,
            userInput: "",
        }
    },
    methods: {
        getMoviesTvShow() {
            this.getMovies();
            this.getTvSeries();
        },
        getMovies() {
            if (this.userInput != '') {
                this.productCallState.getMovies(`${this.productCallState.products_url}movie?api_key=${this.productCallState.api_key}&query=${this.userInput}`)
            }
        },
        getTvSeries() {
            if (this.userInput != ''){
                this.productCallState.getTvShows(`${this.productCallState.products_url}tv?api_key=${this.productCallState.api_key}&query=${this.userInput}`)
        }
        },
        nullChecker(el) {
            if (el != null) {
                return el;
            } else {
                return "-";
            }
            
        },
    },
    mounted() {
    }
    
}
</script>
<template>
    <div>
        <input type="text" placeholder="Inserisci titolo" v-model.trim="userInput" @keyup.enter="getMoviesTvShow">
        <button @click="getMoviesTvShow"> Conferma </button>

        <!-- MOVIE -->
        <div v-if="productCallState.Movies.length>0">
            <div class="my-2 p-2 flex-col gap-2 border-2 border-red" v-for="movie in productCallState.Movies">

                <div v-if="movie.title==movie.original_title">Title:{{ nullChecker(movie.title) }}</div>

                <div v-else class="flex flex-col">
                    <span>Title: {{ nullChecker(movie.title) }} </span>
                    <span>Original Title: {{ nullChecker(movie.original_title) }}</span>
                </div>

                <div>Description: {{ nullChecker(movie.overview) }}</div>

                <div>Language: "{{ nullChecker(movie.original_language) }}"
                    <span :class="`fi fi-${movie.original_language}`">
                    </span>
                </div>

                <div>Vote: {{ nullChecker(movie.vote_average).toFixed(1)}}</div>
            </div>
        </div>

        <!-- TV SHOW -->
        <div v-if="productCallState.TvShows.length > 0">
            <div class="my-2 p-2 flex-col gap-2 border-2 border-blue" v-for="tvShow in productCallState.TvShows">

                <div v-if="tvShow.name == tvShow.original_name">Name:{{ nullChecker(tvShow.name) }}</div>

                <div v-else class="flex flex-col">
                    <span>Name: {{ nullChecker(tvShow.name) }} </span>
                    <span>Original Name: {{ nullChecker(tvShow.original_name) }}</span>
                </div>

                <div>Description: {{ nullChecker(tvShow.overview) }}</div>

                <div>Language: "{{ nullChecker(tvShow.original_language) }}"
                    <span :class="`fi fi-${tvShow.original_language}`">
                    </span>
                </div>

                <div>Vote: {{ nullChecker(tvShow.vote_average).toFixed(1) }}</div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>