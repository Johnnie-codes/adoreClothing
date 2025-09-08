import {createRouter, createWebHistory} from 'vue-router'
import Home from "./pages/Home.vue";
import PharmacyMap from './components/pharmacyMap.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home ,
    },
    {
      path: "/pharmacy-map",
      name: "Pharma",
      component: PharmacyMap ,
    },

  ]
})

export default router
