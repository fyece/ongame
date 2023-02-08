import { createRouter, createWebHistory } from "vue-router";
import GamesView from "../views/GamesView.vue";
import GameInfoView from "../views/GameInfoView.vue";
import DevelopersView from "../views/DevelopersView.vue";
import GenresView from "../views/GenresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GamesView,
    },
    {
      path: "/games",
      name: "games",
      component: GamesView,
    },
    {
      path: "/games/:id",
      name: "gameInfo",
      component: GameInfoView,
    },
    {
      path: "/devs",
      name: "devs",
      component: DevelopersView,
    },
    {
      path: "/genres",
      name: "genres",
      component: GenresView,
    },
  ],
});

export default router;
