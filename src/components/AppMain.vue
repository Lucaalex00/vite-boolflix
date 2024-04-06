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
}
</script>
<template>
    <div class="bg-img">
    </div>
    <div class="card-menu">
        <Card />
    </div>
</template>


<style lang="scss" scoped>
.bg-img {
    width: 100vw;
    height: calc(100vh);
    position: absolute;
    background-image: url(../assets/Netflix_Logo_RGB.png);
    z-index: -1;
    background-size: 1000px 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: black;
}
.card-menu{
    margin: 1rem 0;
}
</style>