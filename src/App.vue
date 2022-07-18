<template>
  <main>
    <div id="app">
      <img src="./assets/my_unsplash_logo.svg" alt="">
      <input type="text" name="" placeholder="Search by name" id="">
      <a id="add-button" href="">Add a photo</a>
    </div>
    <section>
      <Colomn/>
    </section>
  </main>

</template>

<script>
  import Colomn from './components/ColomnComponent.vue'

  export default {
    name: 'App',
    components: {
      Colomn
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
#add-button{
  background: #3DB46D;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 137px;
  height: 55px;

  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  color: white;
  text-decoration: none; /* no underline */
  padding: 10px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
