<template>
  <v-card flat>
    <v-bottom-navigation
            v-model="bottomNav"
            app
            grow
            color="teal"
    >
      <v-btn
              value="about"
              text
              :to="'/'"
      >
        <span>About Me</span>
        <v-icon large>mdi-bird</v-icon>
      </v-btn>

      <v-btn
              value="private"
              text
              :to="'/private'"
      >
        <span>Private</span>
        <v-icon large>mdi-account-details</v-icon>
      </v-btn>

      <v-btn
              value="skill"
              text
              :to="'/skill'"
      >
        <span>Skill</span>
        <v-icon large>mdi-wrench</v-icon>
      </v-btn>

      <v-btn
              value="link"
              text
              :to="'/link'"
      >
        <span>Link</span>
        <v-icon large>mdi-link-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: 'about'
      }
    }
  }
</script>

<style scoped>
.v-bottom-navigation .v-btn{
  height: 100% !important;
}
</style>
