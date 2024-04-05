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
            <a href="https://www.netflix.com/it/"><img src="../assets/Netflix_Logo_RGB.png" alt="Netflix"></a>
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
    padding: 4px 1rem;
    align-items: center;
    >.controls{
        display: flex;
        gap: 1rem;
        >button{
            width: 80px;
            color: white;
            background-color: black;
            border: 2px solid white;
        };
        >input{
            width: 200px;
            background-color: black;
            border: 2px solid white;
            color: white
        };
    }
    
    >.logo>a>img{
        width: 120px;
    }
}

</style>