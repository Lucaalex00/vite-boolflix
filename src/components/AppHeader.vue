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
        }   
    },

}
</script>
<template>
    <div>
        <input type="text" placeholder="Inserisci titolo" v-model="userInput">
        <button @click="getUserInput"> Conferma </button>

    </div>
</template>


<style lang="scss">

</style>