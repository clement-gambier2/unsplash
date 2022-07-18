<template>
    <main id="main-gallery">
        <div id="col1">
            <Picture v-for="picture in pictures1" :key="picture._id" :url="picture.url" :name="picture.name"/>
        </div>

        <div id="col2">
            <Picture v-for="picture in pictures2" :key="picture._id" :url="picture.url" :name="picture.name"/>
        </div>

        <div id="col3">
            <Picture v-for="picture in pictures3" :key="picture._id" :url="picture.url" :name="picture.name"/>
        </div>
        
        
        
        

    </main>
    
</template>



<script>
    import API from '../api';
import Picture from './PictureItem.vue'
    export default{
        data(){
            return{
                pictures1: [],
                pictures2: [],
                pictures3: [],
            };
        },
        components:{
            Picture
        },
        async created(){
            let getAllPicture = await API.getAllPicture();
            if(getAllPicture.length % 3 == 0){
                this.pictures1 = getAllPicture.slice(0, getAllPicture.length/3);
                this.pictures2 = getAllPicture.slice(getAllPicture.length/3, getAllPicture.length/3*2);
                this.pictures3 = getAllPicture.slice(getAllPicture.length/3*2, getAllPicture.length);
            }
            else if(getAllPicture.length % 3 == 1){
                this.pictures1 = getAllPicture.slice(0, getAllPicture.length/3+1);
                this.pictures2 = getAllPicture.slice(getAllPicture.length/3+1, getAllPicture.length/3*2+1);
                this.pictures3 = getAllPicture.slice(getAllPicture.length/3*2+1, getAllPicture.length);
            }
            else if(getAllPicture.length % 3 == 2){
                this.pictures1 = getAllPicture.slice(0, getAllPicture.length/3+1);
                this.pictures2 = getAllPicture.slice(getAllPicture.length/3+1, getAllPicture.length/3*2+2);
                this.pictures3 = getAllPicture.slice(getAllPicture.length/3*2+2, getAllPicture.length);
            }

        }
    }
</script>


<style>
    #main-gallery{
        display: flex;
        flex-direction: row;
        
    }
    gallery-col{
        display: flex;
        flex-direction: column;
    }

    #col1{
        width: 33.33%;
    }
    #col2{
        width: 33.33%;
        padding-top: 15%;
    }
    #col3{
        width: 33.33%;
        
    }
</style>