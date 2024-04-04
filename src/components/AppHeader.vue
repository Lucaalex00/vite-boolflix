<script>
import { productCallState } from "../store/apiCallState"; //API import
import {productShowState} from "../store/productState"
export default {
    name: "AppHeader",
    data() {
        return {
            productCallState,
            productShowState
            
        }
    },
    methods: {
    },
    mounted() {
    }
    
}
</script>
<template>
    <div class="header_container">
        <div class="logo">
            <img src="../assets/Netflix_Logo_RGB.png" alt="Netflix">
        </div>
        <div class="controls">
            <input type="text" placeholder="Inserisci titolo" v-model.trim="productShowState.userInput"
                @keyup.enter="productShowState.getMoviesTvShow">
            <button @click="productShowState.getMoviesTvShow"> Search </button>
        </div>
    </div>

</template>


<style scoped>
.header_container{
    background-color: black;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 4px 1rem;
    align-items: center;
    >.controls{
        display: flex;
        gap: 1rem;
        >button{
            width: 80px;
            background-color: wheat;
            border: 2px solid white;
        };
        >input{
            width: 200px;
            background-color: wheat;
            border: 2px solid white;
            color: black
        };
    }
    
    >.logo>img{
        width: 100px;
    }
}

</style>