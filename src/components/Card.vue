<script>
import { productCallState } from '../store/apiCallState';
import { productShowState } from '../store/productState';
export default {
    name: 'Card',
    data() {
        return {
            productCallState,
            productShowState,
            methods: {
                getInputError() {
                    this.$emit('error')
                }
            }
        }
    }
}
</script>

P.1: capire come spostare il ciclo for all'interno del mio appMain e non della singola card.
P.2: trovare problema nell'event emit.
P.3 stilizzare la card e renderla come prima (un flex orizzontale con la scrollbar )
<template>
    <div class="card">
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

        <!-- TV SHOWs -->
        <div class="product_container" v-if="productCallState.TvShows.length > 0">
            <div class="my-2 p-1 border-2 border-blue bg-dark text-white" v-for="tvShow in productCallState.TvShows">
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
        <div v-if="productCallState.Movies.length == 0 && productCallState.TvShows.length == 0" class="container_null">
            <span v-if="productShowState.userInput == null" class="element_null text-white">{{ getInputError(),
            productShowState.resetUserInput}}</span>
        </div>
    </div>
</template>


<style scoped>
    /* .card{
        overflow-y: auto;
        overflow-x: hidden;
        width: 300px;
        height: 100%;
    
        >img {
            opacity: 60%;
        }

    } */
</style>