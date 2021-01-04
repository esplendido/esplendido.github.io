<template>
  <v-container fluid>
    <v-layout row wrap justify-center fill-height id="about">
      <v-flex text-xs-center xs12>
        <span class="font-weight-bold title-font">About Me</span>
        <br/>
        <v-avatar size="250" color="grey lighten-4" style="border:3px solid #ffa500 !important">
          <img
                  :src="avatar"
                  alt="avatar"
          >
        </v-avatar>
        <div class="title font-weight-thin mt-3">
          <span>【</span>
          <a :href="data.twitterUrl">Twitter:{{data.twitterId}}</a>
          <span>】</span>
        </div>
        <p class="title font-weight-thin mt-3" v-html="data.intro"></p>
        <br/>
        <a href="#percentage">
          <v-img src="https://media0.giphy.com/media/WoztRT1FFeliwstmao/giphy.gif" class="hidden-sm-and-down" width="5%" style="left: 48%"></v-img>
          <v-img src="https://media0.giphy.com/media/WoztRT1FFeliwstmao/giphy.gif" class="hidden-md-and-up" width="15%" style="left: 43%;margin-bottom: 3vh;"></v-img>

        </a>
      </v-flex>
    </v-layout>
    <v-layout justify-center fill-height row wrap id="percentage">
      <v-flex xs12 text-xs-center mt-5>
        <p class="simple-font font-weight-light">playing GAME</p>
        <v-row style="padding: 0px 5vw;">
          <v-col cols=12 sm=6 lg=4 v-for="(game,index) in data.games" :key="index">
            <Card :game="game"/>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
    <v-divider class="my-5"></v-divider>
    <v-layout align-content justify-center fill-height row wrap class="my-5" data-aos="fade-up">
<!--       <v-flex xs12 text-xs-center mb-5>
        <span class="simple-font font-weight-light">Contact</span>
      </v-flex>
      <v-flex xs12 text-xs-center mb-1>
        <v-icon>mdi-email</v-icon>
        <span class="simple-sm-font"> {{data.email}}</span><br/>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
  import Card from './parts/Card'

  export default {
    props: ['data'],
    components: {
      Card,
    },
    data: () => ({
      avatar: require("../assets/esple_icon.jpeg"),
    }),
    beforeMount() {
    }
  };
</script>
