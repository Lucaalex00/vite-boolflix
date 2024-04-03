<script>
import { productCallState } from "../store/apiCallState" //API import
import { hasFlag } from 'country-flag-icons' //Flags Import
export default {
    name: "AppHeader",
    data() {
        return {
            productCallState,
            userInput: "",
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
            
        },
        flagCheck(lang) {
            if (hasFlag(lang)) {
                return 
            } else {
                return "-"
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
                <div>Language: "{{ nullChecker(product.original_language) }}"
                    <img :src="flagCheck('EN')" width="20px" alt="">
                </div>
                <div>Vote: {{ nullChecker(product.vote_average)}}</div>
                <span class="fi fi-gr"></span>
            </div>
        </div>

    </div>
</template>


<style scoped>

</style>