<script>
import { productCallState } from '../store/apiCallState'; //API IMPORT
import { productShowState } from '../store/productState'; //Product Management State
import Card from './Card.vue';
export default {
    name: "AppMain",
    data() {
        return {
            productCallState,
            productShowState,
        }
    },
    components: {
        Card
    },
    methods: {
        getInputError() {
            return ('0 titles found, retry')
        }
    }
}
</script>
<template>
    <div class="bg-img">
        <Card @error="getInputError()"/>
    </div>
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
    width: 300px;
    height: 100%;
    >img{
    opacity: 60%;
    }
    
}
.container_null{
    height: calc(100vh - 50px - 4px);
    display: flex;
    justify-content: center;
    opacity: 60%;
    >.element_null{
        font-size: 2rem;
        color: red;
        text-shadow: 1px 1px white;
    }
}
::-webkit-scrollbar {
        width: 0;
    }
</style>