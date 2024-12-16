import { createRouter, createWebHistory } from "vue-router";
import LoginSection from "@/components/LoginSection.vue";
import HomeView from "@/views/HomeView.vue";
import HotelDetail from "@/views/HotelDetail.vue";
import LocationDetail from "@/views/LocationDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginSection,
    props: { mode: "login" },
  },
  {
    path: "/register",
    name: "register",
    component: LoginSection,
    props: { mode: "register" },
  },
  {
    path: "/hotel/:id",
    name: "HotelDetail",
    component: HotelDetail,
    props: true,
  },
  {
    path: "/Location/:id",
    name: "LocationDetail",
    component: LocationDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
