<template>
    <div>
        <img id="pict" :src=url alt="" @mouseover="hover = true" @mouseleave="hover = false">
        <span v-if="hover">Bonjour</span>
    </div>
    
    
</template>


<script>
    export default {
        props: ['url'],
        data() {
            return {
                hover: false,
            };
        }
    }
</script>


<style>
    #pict{
        border-radius: 16px;
        width: 90%;
        margin: 10px 10px;
    }

    
</style>