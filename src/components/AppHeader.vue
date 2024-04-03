<script>
import {productCallState} from "../store/apiCallState"
export default {
    name: "AppHeader",
    data() {
        return {
            productCallState,
            userInput:"",
        }
    },
    methods: {
        getUserInput() {
            console.log(this.userInput)
            this.userInput = ''
        },
        getMovies() {
            this.productCallState.getProducts(`${this.productCallState.products_url}movie?api_key=${this.productCallState.api_key}&query=${this.userInput}`)
        },
        nullChecker(el) {
            if (el != null) {
                return el;
            } else {
                return "-";
            }
            
        }
    },
    mounted() {
        this.getMovies()
    }
    
}
</script>
<template>
    <div>
        <input type="text" placeholder="Inserisci titolo" v-model="userInput" @keyup.enter="getMovies">
        <button @click="getMovies"> Conferma </button>
        <div v-if="productCallState.products.length>0">
            <div class="my-2 p-2 flex-col gap-2 border-2" v-for="product in productCallState.products">
                <div v-if="product.title==product.original_title">Title:{{ nullChecker(product.title) }}</div>
                <div class="flex flex-col" v-else>
                    <span v-if="product.title!=null">Title: {{ nullChecker(product.title) }} </span>
                    <span>Original Title: {{ nullChecker(product.original_title) }}</span>
                </div>
                <div>Description: {{ nullChecker(product.overview) }}</div>
                <div>Language: "{{ nullChecker(product.original_language) }}"</div>
                <div>Vote: {{ nullChecker(product.vote_average)}}</div>
            </div>
        </div>

    </div>
</template>


<style>
    .flex{
        display: flex;
    }

    .flex-col{
        flex-direction:column;
    }

    .gap-2{
        gap:1rem;
    }

    .border-2{
        border:2px solid black;
    }

    .p-2{
        padding:0.5rem
    }

    .my-2{
        margin:4px 0
    }
</style>