<template>
    <div id="container">
        <img id="pict" :src=url alt="" @mouseover="hover = true" @mouseleave="hover = false">
        <span v-if="hover">{{name}}</span>
        <button @click="showDelete = true">Delete</button>
        <DeleteBox  v-if="showDelete" @close="showDelete = false"/>
        <!--  -->
    </div>
</template>


<script>
import DeleteBox from './DeleteBox.vue'
    export default {
    props: ["url", "name"],
    data() {
        return {
            hover: false,
            showDelete: false,
        };
    },
    components: { DeleteBox }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    #container{
        position: relative;
    }
    #pict{
        border-radius: 16px;
        width: 90%;
        margin: 10px 10px;
    }
    span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        position: absolute;
        top: 90%;
        left:10%;
        color: #FFF;
        
        
    }

    
</style>