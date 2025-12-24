import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home.vue";
import PharmacyMap from './components/pharmacyMap.vue';
import Kenema from './pages/kenema.vue';
import AdoreLanding from './pages/AdoreLanding.vue';
import ShoesPage from './pages/ShoesPage.vue';
import TrousersPage from './pages/TrousersPage.vue';
import TShirtsPage from './pages/TShirtsPage.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/pharmacy-map",
    //   name: "Pharma",
    //   component: PharmacyMap,
    // },
    // {
    //   path: "/",
    //   name: "kenema",
    //   component: Kenema,
    // },
    {
      path: "/",
      name: "Adore",
      component: AdoreLanding,
    },
    {
      path: "/shoes",
      name: "Shoes",
      component: ShoesPage,
    },
    {
      path: "/trousers",
      name: "Trousers",
      component: TrousersPage,
    },
    {
      path: "/tshirts",
      name: "TShirts",
      component: TShirtsPage,
    },
  ]
})

export default router
