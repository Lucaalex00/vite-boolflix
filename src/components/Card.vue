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
    <div class="products_container" v-if="productCallState.Movies.length > 0">
        <div class="my-2 border-2 border-red bg-dark text-white" v-for="movie in productCallState.Movies">
            <div class="product_item" @mouseover="showInfo(movie)" @mouseleave="hideInfo(movie)">
                <div v-if="movie.showInfo==true">
                    <img class="product_img" :src="`${productCallState.cover_url}w342${movie.backdrop_path}`"
                        v-if="movie.poster_path != null" alt="Title Image">
                    <img class="product_img" v-else src="../assets/No_Image_Available.jpg" alt="No Image Avalaible">
                </div>
                <div v-else>
                    <img class="product_img" :src="`${productCallState.cover_url}w342${movie.poster_path}`"
                        v-if="movie.poster_path != null" alt="Title Image">
                    <img class="product_img" v-else src="../assets/No_Image_Available.jpg" alt="No Image Avalaible">
                </div>

                <div v-if="movie.showInfo==true" class="lang">
                    <span v-if="movie.original_language!=null" :class="`fi fi-${movie.original_language}`">
                    </span>
                </div>
                <div class="info_product p-1" v-if="movie.showInfo==true">
                    <div class="title" v-if="movie.title == movie.original_title">{{
                        productShowState.nullChecker(movie.title)
                        }}</div>

                    <div v-else class="flex flex-col">
                        <span class="title"> {{ productShowState.nullChecker(movie.title) }} </span>
                        <span class="title"> {{ productShowState.nullChecker(movie.original_title)
                            }}</span>
                    </div>

                    <div class="desc"> {{ productShowState.nullChecker(movie.overview) }}</div>
                    <div class="stars_vote">
                        <font-awesome-icon v-for="index in 5"
                            :icon="productShowState.getIntVote((movie.vote_average / 2), index)" />
                        <span class="numeric_vote">
                            {{ (movie.vote_average / 2).toFixed(1) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- TV SHOWs -->
    <h1 class="tvshow_title" v-if="productCallState.TvShows.length > 0">TV-Show</h1>
    <div class="products_container" v-if="productCallState.TvShows.length > 0">
        <div class="my-2 border-2 border-green bg-dark text-white" v-for="tvShow in productCallState.TvShows">
            <div class="product_item" @mouseover="showInfo(tvShow)" @mouseleave="hideInfo(tvShow)">
                <div v-if="tvShow.showInfo==false">
                    <img class="product_img" :src=" `${productCallState.cover_url}w342${tvShow.poster_path}`"
                        v-if="tvShow.poster_path != null" alt="Image">
                    <img class="product_img" v-else src="../assets/No_Image_Available.jpg" alt="No Image Avalaible">
                </div>
                <div v-else>
                    <img class="product_img" :src="`${productCallState.cover_url}w342${tvShow.backdrop_path}`"
                        v-if="tvShow.backdrop_path != null" alt="Image">
                    <img class="product_img" v-else src="../assets/No_Image_Available.jpg" alt="No Image Avalaible">
                </div>

                <div v-if="tvShow.showInfo==true" class="lang"> 
                    <span :class="`fi fi-${tvShow.original_language}`">
                    </span>
                </div>
                <div class="info_product p-1" v-if="tvShow.showInfo==true">
                    <div class="title" v-if="tvShow.name == tvShow.original_name">{{
                        productShowState.nullChecker(tvShow.name) }}
                    </div>

                    <div v-else class="flex flex-col">
                        <span class="title">{{ productShowState.nullChecker(tvShow.name) }} </span>
                        <span class="title">{{ productShowState.nullChecker(tvShow.original_name)
                            }}</span>
                    </div>

                    <div class="desc" v-if="tvShow.overview!=''">{{ productShowState.nullChecker(tvShow.overview) }}</div>
                    <div v-else> No Description</div>
                    <div class="stars_vote">
                        <font-awesome-icon v-for="index in 5"
                            :icon="productShowState.getIntVote((tvShow.vote_average / 2), index)" />
                        <span class="numeric_vote">
                            {{ (tvShow.vote_average / 2).toFixed(1) }}
                        </span>
                    </div>
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
        color: rgb(72, 255, 0);
        text-shadow: 2px 2px rgba(30, 129, 0, 0.699)
    }
    
    .bg-dark {
        background-color: rgba(0, 0, 0, 0.753);
    }
    
    .text-white {
        color: white;
    }
    
    .products_container {
        overflow-x: auto;
        display: flex;
        width: 80%;
        height: 300px;
        margin: auto;
        padding: 1rem;
        }
    
    .product_item {
        overflow-y: auto;
        width: 250px;
        height: 100%;
        position: relative;
        .product_img {
            opacity: 80%;
            width: 100%;
            height: 100%;
            object-fit: fill;
            position: absolute;
        }
    } 
    .info_product{
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .title:first-child {
            font-size: 1.2rem;
            text-decoration: underline;
            font-weight: bold;
        }
        >.desc{
            line-height: 20px;
            background-color: rgba(0, 0, 0, 0.397);
            border-radius: 10%;
            padding: 0.25rem;
            z-index: 1;
            max-height: 100px;
            width: 80%;
            margin-left:0;
            overflow-y: auto;
        }
        >.stars_vote{
            display: flex;
            color: rgb(209, 178, 0);
            >.numeric_vote{
                margin-left: 0.5rem;
                text-shadow: 2px 2px black
            }
        };
    }
    .lang {
        font-size: 1.2rem;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem;
    }
    
    .container_null {
        height: 100%;
        display: flex;
        justify-content: center;
        opacity: 90%;
        position: relative;
        
        >.element_null {
            font-size: 1.3rem;
            color: white;
            text-shadow: 2px 2px red;
            position: absolute;
            right: 10%;
            top: -2rem;
        }
    }

    ::-webkit-scrollbar {
        width: 0;
    }
</style>