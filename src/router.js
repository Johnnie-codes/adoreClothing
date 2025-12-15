import {createRouter, createWebHistory} from 'vue-router'
import Home from "./pages/Home.vue";
import PharmacyMap from './components/pharmacyMap.vue';
import Kenema from './pages/kenema.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home ,
    // },
    {
      path: "/pharmacy-map",
      name: "Pharma",
      component: PharmacyMap ,
    },
    {
      path: "/",
      name: "kenema",
      component: Kenema ,
    },

  ]
})

export default router
