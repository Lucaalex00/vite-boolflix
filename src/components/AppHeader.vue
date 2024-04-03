<script>
import { productCallState } from "../store/apiCallState"; //API import
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
        getIntVote(vote,i ) {
                if (i <= vote) {
                    return "fa-solid fa-star";
                     
                } else if (i == Math.ceil(vote) && vote % 1 !== 0.0) {
                    return "fa-solid fa-star-half-stroke";

                } else {
                    return "fa-regular fa-star" ;
                }
            } 
        },
    mounted() {
    }
    
}
</script>
<template>
    <div>
        <input type="text" placeholder="Inserisci titolo" v-model.trim="userInput" @keyup.enter="getMoviesTvShow">
        <button @click="getMoviesTvShow"> Conferma </button>
        <font-awesome-icon icon="fa-regular fa-star" />

        <!-- MOVIE -->
        <div v-if="productCallState.Movies.length>0">
            <div class="my-2 p-2 flex-col gap-2 border-2 border-red" v-for="movie in productCallState.Movies">
                <img :src="`${productCallState.cover_url}w154${movie.poster_path}`" v-if="movie.poster_path != null"
                    alt="Image">

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

                <font-awesome-icon v-for="index in 5" :icon="getIntVote((movie.vote_average / 2), index)" />
                {{(movie.vote_average/2).toFixed(1)}}

            </div>
        </div>

        <!-- TV SHOW -->
        <div v-if="productCallState.TvShows.length > 0">
            <div class="my-2 p-2 flex-col gap-2 border-2 border-blue" v-for="tvShow in productCallState.TvShows">
                <img :src="`${productCallState.cover_url}w154${tvShow.poster_path}`" v-if="tvShow.poster_path!=null"
                    alt="Image">
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

                <font-awesome-icon v-for="index in 5" :icon="getIntVote((tvShow.vote_average / 2), index)" />
                {{ (tvShow.vote_average / 2).toFixed(1) }}
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>