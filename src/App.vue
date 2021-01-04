<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Vuetify /> -->
    <v-app>
      <v-main>
        <router-view></router-view>
      </v-main>
      <BottomNavi/>
    </v-app>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import Vuetify from './components/Vuetify.vue'
  import BottomNavi from './components/BottomNavi'

  export default {
    name: 'App',
    components: {
      // HelloWorld,
      // Vuetify,
      BottomNavi,
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch|Caveat|M+PLUS+Rounded+1c&display=swap');
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
  .title-font {
    font-family: 'Cabin Sketch', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 5em;
  }
  .simple-sm-font {
    font-family: 'Caveat', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 1.5em;
  }
  .simple-md-font {
    font-family: 'Caveat', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 4.5em;
  }
  .simple-lg-font {
    font-family: 'Caveat', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 9em;
  }
  .simple-font {
    font-family: 'Caveat', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 2.5em;
  }
</style>
