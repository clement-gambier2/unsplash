<template>
    <div>
        <img id="pict" :src=url alt="" @mouseover="hover = true" @mouseleave="hover = false">
        <span >{{name}}</span>
    </div>
    
    
</template>


<script>
    export default {
        props: ['url','name'],
        data() {
            return {
                hover: false,
            };
        }
    }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
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

/* color: #FFFFFF; */
    }

    
</style>