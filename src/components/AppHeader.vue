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
    background-color: rgba(0, 0, 0, 0.973);
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 4px 1rem;
    align-items: center;
    height: 50px;
    >.controls{
        display: flex;
        gap: 1rem;
        >button{
            width: 80px;
            color: white;
            background-color: black;
            border: 2px solid white;
            transition: 1000ms;
            cursor: pointer;
            &:hover {
                    background-color: rgb(255, 255, 255);
                    color: black;
                    border: 2px solid black
                }
        };
        >input{
            width: 200px;
            background-color: black;
            border: 2px solid white;
            color: white;
            transition: 1000ms;
            &:focus{
                background-color:rgb(255, 255, 255);
                color: black;
                border: 2px solid black
            }
        };
        
    };
        >.logo>a>img{
            width: 120px;
            transition: 2000ms;
            &:hover{
                filter: invert(100%);
                width:150px;
            }
        };
}

</style>