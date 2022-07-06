<template>
    <main id="main-gallery">
        <div class="gallery-col">
            <Picture url="https://images.unsplash.com/photo-1657041062798-9f56b569a226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Picture url="https://images.unsplash.com/photo-1657057661199-2c4b144fd629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
            <Picture url="https://images.unsplash.com/photo-1657004426824-be76151b7b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div class="gallery-col">
            <Picture url="https://images.unsplash.com/photo-1657004426824-be76151b7b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            <Picture url="https://images.unsplash.com/photo-1657041062798-9f56b569a226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Picture url="https://images.unsplash.com/photo-1657057661199-2c4b144fd629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div class="gallery-col">
            <Picture url="https://images.unsplash.com/photo-1657057661199-2c4b144fd629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
            <Picture url="https://images.unsplash.com/photo-1657004426824-be76151b7b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            <Picture url="https://images.unsplash.com/photo-1657041062798-9f56b569a226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        
    </main>
    
</template>



<script>
    import Picture from './PictureItem.vue'
    export default{
        components:{
            Picture
        }
    }
</script>


<style>
    #main-gallery{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        
    }
    .gallery-col{
        display: flex;
        flex-direction: column;
        
    }
</style>