<template>
	<v-card>
		<v-card-title :style="titleFontSize">{{ game.title }}</v-card-title>
		<v-card-subtitle>{{ game.subtitle }}</v-card-subtitle>
		<v-card-text>
			<div :style="fontSize" v-for="(line,i) in game.detail" :key="i" v-html="line"/>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: 'Card',
	props: {
		game: Object
	},
  computed: {
    titleFontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size: inherit !important";
        case "sm":
          return "font-size: 1.2rem !important";
        default:
          return "font-size: 1.7rem !important";
      }
    },
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size: inherit !important";
        case "sm":
          return "font-size: 0.9rem !important";
        default:
          return "font-size: 1.2rem !important";
      }
    }
  },
  data: () => ({
    data: {title:"Vue Router 入門", subtitle:"", text:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating."},
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    text-align: left;
  }
</style>
