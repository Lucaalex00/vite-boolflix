<script>
import { productCallState } from '../store/apiCallState';
import { productShowState } from '../store/productState';
export default {
    name: 'Card',
    emits:['err'],
    data() {
        return {
            productCallState,
            productShowState,
        }
    },
    methods: {
        getInputError() {
            if (productCallState.Movies.length == 0 && productCallState.TvShows.length == 0) {
                this.productShowState.resetUserInput();
                console.log('ciao');
                this.$emit('err', '0 titles found,');
            }
        }
    }
}
</script>
<template>
    <!-- MOVIE -->
    <h1 class="movie_title" v-if="productCallState.Movies.length > 0"> Movies </h1>
    <div class="product_container" v-if="productCallState.Movies.length > 0">
        <div class="my-2 p-1 border-2 border-red bg-dark text-white" v-for="movie in productCallState.Movies">
            <div class="product_item">
                <div class="card">
                    <img :src="`${productCallState.cover_url}w342${movie.poster_path}`" v-if="movie.poster_path != null"
                        alt="Image">

                    <div v-if="movie.title == movie.original_title">Title:{{ productShowState.nullChecker(movie.title)
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
    <h1 class="tvshow_title" v-if="productCallState.TvShows.length > 0">Tv-Show</h1>
    <div class="product_container" v-if="productCallState.TvShows.length > 0">
        <div class="my-2 p-1 border-2 border-blue bg-dark text-white" v-for="tvShow in productCallState.TvShows">
            <div class="product_item">
                <img :src="`${productCallState.cover_url}w342${tvShow.poster_path}`" v-if="tvShow.poster_path != null"
                    alt="Image">
                <div v-if="tvShow.name == tvShow.original_name">Name:{{ productShowState.nullChecker(tvShow.name) }}
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

    <div class="container_null">
        <span class="element_null text-white">
            {{getInputError()}} {{   }}
        </span>
    </div>
</template>


<style scoped>
    h1{
         text-align: center;
         font-size:2rem;
    }
    .movie_title{
        color: red;
    }
    .tvshow_title{
        color: blue;
    }
    .card{
        overflow-y: auto;
        overflow-x: hidden;
        width: 300px;
        height: 100%;
    
        >img {
            opacity: 60%;
        }

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
            height: 800px;
            margin: auto;
            padding: 1rem;
    
        }
    
        .product_item {
            overflow-y: auto;
            overflow-x: hidden;
            width: 300px;
            height: 100%;
    
            >img {
                opacity: 60%;
            }
    
        }
    
        .container_null {
            height: calc(100vh - 50px - 4px);
            display: flex;
            justify-content: center;
            opacity: 60%;
    
            >.element_null {
                font-size: 2rem;
                color: red;
                text-shadow: 1px 1px white;
                background-color: white;
            }
        }
    
        ::-webkit-scrollbar {
            width: 0;
        }
</style>