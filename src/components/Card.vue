<script>
import { productCallState } from '../store/apiCallState';
import { productShowState } from '../store/productState';
export default {
    name: 'Card',
    data() {
        return {
            productCallState,
            productShowState,
            showInfoProduct: false,
        }
    },
    methods: {
        addShowInfoProperty() {
            productCallState.Movies.forEach(movie => {
                movie.showInfo = false;    
            })
            
    },
        /**
         * Show "EL" info
         * @param {Object} el 
         */
        showInfo(el) {
            el.showInfo = true;
        },
        /**
         * Hide "EL" info
         * @param {Object} el 
         */
        hideInfo(el) {
            el.showInfo = false;
        }
    }
}
</script>
<template>
    <!-- MOVIE -->
    <h1 class="movie_title" v-if="productCallState.Movies.length > 0"> Movies </h1>
    <div class="product_container" v-if="productCallState.Movies.length > 0">
        <div class="my-2 p-1 border-2 border-red bg-dark text-white" v-for="movie in productCallState.Movies">
            <div class="product_item" @mouseover="showInfo(movie)" @mouseleave="hideInfo(movie)">
                <img :src="`${productCallState.cover_url}w342${movie.poster_path}`" v-if="movie.poster_path != null"
                    alt="Title Image">
                <img v-else src="../assets/No_Image_Available.jpg" alt="No Image Avalaible">
                <div class="info_product" v-if="movie.showInfo==true">
                    <div v-if="movie.title == movie.original_title">Title:{{
                        productShowState.nullChecker(movie.title)
                        }}</div>

                    <div v-else class="flex flex-col">
                        <span>Title: {{ productShowState.nullChecker(movie.title) }} </span>
                        <span>Original Title: {{ productShowState.nullChecker(movie.original_title) }}</span>
                    </div>

                    <div>Description: {{ productShowState.nullChecker(movie.overview) }}</div>

                    <div>Language: "{{ productShowState.nullChecker(movie.original_language) }}"
                        <span :class="`fi fi-${movie.original_language}`">
                        </span>
                    </div>

                    <font-awesome-icon v-for="index in 5"
                        :icon="productShowState.getIntVote((movie.vote_average / 2), index)" />
                    {{ (movie.vote_average / 2).toFixed(1) }}
                </div>
            </div>
        </div>
    </div>

    <!-- TV SHOWs -->
    <h1 class="tvshow_title" v-if="productCallState.TvShows.length > 0">TV-Show</h1>
    <div class="product_container" v-if="productCallState.TvShows.length > 0">
        <div class="my-2 p-1 border-2 border-blue bg-dark text-white"
            v-for="(tvShow, index) in productCallState.TvShows">
            <div class="product_item" 
            @mouseover="showInfo(tvShow)" 
            @mouseleave="hideInfo(tvShow)">
                <img :src=" `${productCallState.cover_url}w342${tvShow.poster_path}`" v-if="tvShow.poster_path != null"
                alt="Image">
                <img v-else src="../assets/No_Image_Available.jpg" alt="No Image Avalaible">
                <div class="info_product" v-if="tvShow.showInfo==true">
                    <div v-if="tvShow.name[index] == tvShow.original_name[index]">Name:{{
                        productShowState.nullChecker(tvShow.name) }}
                    </div>

                    <div v-else class="flex flex-col">
                        <span>Name: {{ productShowState.nullChecker(tvShow.name) }} </span>
                        <span>Original Name: {{ productShowState.nullChecker(tvShow.original_name) }}</span>
                    </div>

                    <div>Description: {{ productShowState.nullChecker(tvShow.overview) }}</div>

                    <div>Language: "{{ productShowState.nullChecker(tvShow.original_language) }}"
                        <span :class="`fi fi-${tvShow.original_language}`">
                        </span>
                    </div>

                    <font-awesome-icon v-for="index in 5"
                        :icon="productShowState.getIntVote((tvShow.vote_average / 2), index)" />
                    {{ (tvShow.vote_average / 2).toFixed(1) }}
                </div>
            </div>
        </div>
    </div>

    <div class="container_null" v-if="productShowState.errorMessage!=''">
        <span class="element_null text-white">
            {{ productShowState.errorMessage }}
        </span>
    </div>
    <div class="bg-img" v-else> </div>
</template>


<style scoped>
    h1{
         text-align: center;
         font-size:2rem;
    }
    .movie_title{
        color: red;
        text-shadow: 2px 2px rgba(180, 0, 0, 0.699)
    }
    .tvshow_title{
        color: blue;
        text-shadow: 2px 2px rgba(0, 0, 180, 0.699)
    }
    img {
        opacity: 60%;
        width: 100%;
        height: 100%
    }
    .info_product{
        position: absolute;
        top: 0;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.753);
    }

    .text-white {
        color: white;
    }

    .product_container {
        overflow-y: auto;
        display: flex;
        width: 80%;
        height: 300px;
        margin: auto;
        padding: 1rem;

    }

     .product_item {
        overflow-y: auto;
        overflow-x: hidden;
        width: 300px;
        height: 100%;
        position: relative;
        >img {
            opacity: 60%;
            width: 100%;
            height: 100%;
        }

    } 

    .container_null {
        height: 100%;
        display: flex;
        justify-content: center;
        opacity: 90%;
        position: relative;

        >.element_null {
            font-size: 5rem;
            color: white;
            text-shadow: 2px 2px red;
        }
    }

    ::-webkit-scrollbar {
        width: 0;
    }
</style>