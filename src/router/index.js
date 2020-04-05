import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import Tvshows from "../views/Tvshows.vue";
import Animes from "../views/Animes.vue";
import avengresendgame from '../views/movies/avengresendgame.vue'
import Sitekey from '../views/Sitekey.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
      title: "Tvshow - Home"
    }
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
    meta: {
      auth: true,
      title: "Tvshow - Movies"
    }
  },
  {
    path: "/tvshows",
    name: "Tvshows",
    component: Tvshows,
    meta: {
      auth: true,
      title: "Tvshow - Tvshows"
    }
  },
  {
    path: "/animes",
    name: "Animes",
    component: Animes,
    meta: {
      auth: true,
      title: "Tvshow - Animes"
    }
  },
  {
    path: "/movies/:id",
    name: "Avengers: Endgame",
    component: avengresendgame,
    meta: {
      auth: true,
      title: "Tvshow - Avengres Endgame"
    }
  },
  {
    path: "/sitekey",
    name: "SiteKey",
    component : Sitekey
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
