<script>
import { productCallState } from '../store/apiCallState'; //API IMPORT
import { productShowState } from '../store/productState';
export default {
    name: "AppMain",
    data() {
        return {
            productCallState,
            productShowState,
        }
    }
}
</script>
<template>
    <div class="bg-img">
        <!-- MOVIE -->
        <div class="product_container" v-if="productCallState.Movies.length > 0">
            <div class="my-2 p-1 border-2 border-red bg-dark text-white" v-for="movie in productCallState.Movies">
                <div class="product_item">
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

        <!-- TV SHOW -->
        <div class="product_container" v-if="productCallState.TvShows.length > 0">
            <div class="my-2 p-1 border-2 border-blue bg-dark text-white"
                v-for="tvShow in productCallState.TvShows">
                <div class="product_item">
                    <img :src="`${productCallState.cover_url}w342${tvShow.poster_path}`"
                        v-if="tvShow.poster_path != null" alt="Image">
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
    </div>
    <div v-if="productCallState.Movies.length== 0 && productCallState.TvShows.length== 0"> Insert a valid Title</div>
</template>


<style lang="scss" scoped>
.bg-dark {
    background-color: rgba(0, 0, 0, 0.753);
}
.text-white{
    color: white;
}
.bg-img{
    background-image: url(../assets/Netflix_Logo_RGB.png);
        background-size:1000px 600px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: black;
        
}
.product_container{
    overflow-y: auto;
    display: flex;
    width: 80%;
    height:800px;
    margin: auto;
    padding: 1rem;

}
.product_item {
    overflow-y: auto;
    overflow-x: hidden; 
    height: 100%;
    >img{
    opacity: 60%;
    }
    
}
::-webkit-scrollbar {
        width: 0;
    }
</style>