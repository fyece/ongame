import { createRouter, createWebHistory } from "vue-router";
import GamesView from "../views/GamesView.vue";
import GameInfoView from "../views/GameInfoView.vue";
import DevelopersView from "../views/DevelopersView.vue";
import DeveloperInfoView from "../views/DeveloperInfoView.vue";
import GenresView from "../views/GenresView.vue";
import GenreInfoView from "../views/GenreInfoView.vue";

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
      path: "/developers",
      name: "devs",
      component: DevelopersView,
    },
    {
      path: "/developers/:id",
      name: "devsInfo",
      component: DeveloperInfoView,
    },
    {
      path: "/genres",
      name: "genres",
      component: GenresView,
    },
    {
      path: "/genres/:id",
      name: "genreInfo",
      component: GenreInfoView,
    },
  ],
});

export default router;
