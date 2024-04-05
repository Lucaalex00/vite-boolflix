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
        <Card />
    </div>
</template>


<style lang="scss" scoped>
.bg-img {
    background-image: url(../assets/Netflix_Logo_RGB.png);
    background-size: 1000px 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: black;
    height: calc(100vh - 50px - 4px);

}
</style>