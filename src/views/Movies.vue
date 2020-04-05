<template>
  <div class="movies-section">
    <v-card elevation-24>
      <v-img src="../assets/cinema.jpg" height="450">
        <v-card color="transparent" class="mt-12 ml-12" flat>
          <v-card-actions>
            <v-btn height="100" width="200" dark color="grey darken-4" elevation="20">
              <span class="title">Movies</span>
              <v-icon right large class="ml-4">mdi-movie-open-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-img>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="12" md="10">
          <v-form>
            <v-text-field
              outlined
              dark
              height="70"
              placeholder="Search On Movie Or Tvshow :)"
              label="Search"
              type="search"
              background-color="grey darken-3"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn width="100%" height="70" color="orange darken-2" dark>
            <span class="subtitle">Search</span>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" v-for="movie in movies" :key="movie._id">
          <v-hover v-slot:default="{ hover }">
            <v-card
              target="_blank"
              height="400"
              color="transparent"
              :elevation="hover ? 16 : 2"
              style="position: relative"
              route
              :to="movie.route"
              :class="{scale: hover}"
            >
              <v-img :src="movie.img[0]" height="100%" position="relative" :class="{scale: hover}"
              >
                <v-card color="rgba(0,0,0,0.66)" dark>
                  <v-card-actions>
                    <v-chip color="yellow" outlined>
                      <span class="subtitle-1 white--text">{{movie.imdbrate}}</span>
                      <v-icon right>mdi-star</v-icon>
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-chip color="blue" outlined>
                      <span class="white--text">{{movie.quality[0]}} | {{movie.quality[1]}}</span>
                    </v-chip>
                  </v-card-actions>
                </v-card>
                <v-btn absolute bottom color="yellow">
                  <v-icon>mdi-play-outline</v-icon>
                  <span>{{movie.name}}</span>
                </v-btn>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-alert border="top" color="red" outlined width="500px" class="mx-auto" transition="slide-x-transition" icon="mdi-alert-decagram-outline" v-if="error">{{error}}</v-alert>
    </v-container>
  </div>
</template>

<script>
import MoviesService from '../MoviesService';
export default {
  data() {
    return {
      page: 1,
      drawer: false,
      sections: [
        { title: "War Movie", route: "/" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" }
      ],
      movies: [],
      error: '',
    };
  },
  async created() {
    try 
    {
      this.movies = await MoviesService.getMovies()
    } catch (err) {
      this.error = err.message
    }
  },
};
</script>

<style>
.v-parallax__content {
  padding: 0 !important;
}
.v-pagination__more {
  color: #fff;
}
.scale{
  transition: all .4s ease-in-out;
  transform: scale(1.1);
  z-index: 9999;
}
</style>
