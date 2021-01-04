import Vue from 'vue'
import VueRouter from "vue-router"
import AboutMe from "../components/AboutMe.vue"
import Private from "../components/Private.vue"
import Skill from "../components/Skill.vue"
import Link from "../components/Link.vue"

import data from '../assets/ja.json'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AboutMe,
    props: {data: data}
  },
  // {
  //   path: '/aboutme',
  //   redirect: "/"
  // },
  {
    path: '/private',
    component: Private
  },
  {
    path: '/skill',
    component: Skill
  },
  {
    path: '/link',
    component: Link
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router