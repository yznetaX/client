<template>
  <div class="mt-12">
    <v-card
      class="mt-12"
      v-for="movie in movies"
      :key="movie._id"
      dark
      flat
    >
    <v-container>
      <v-card color="transparent" flat>
        <v-row>
          <v-col cols="12" md="4">
            <v-card color="transparent" flat height="450" elevation="18">
              <v-img :src="movie.img[0]" height="100%" class="scale"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card color="transparent" flat>
              <v-card-title class="text-center d-block display-1">{{movie.name}}</v-card-title>
              <v-card-subtitle>{{movie.description}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    </v-card>
    <v-alert
      border="top"
      color="red"
      outlined
      width="500px"
      class="mx-auto"
      transition="slide-x-transition"
      icon="mdi-alert-decagram-outline"
      v-if="error"
      >{{ error }}</v-alert
    >
  </div>
</template>

<script>
import axios from "axios";
// import MoviesService from '../../MoviesService';
export default {
  data() {
    return {
      movies: [],
      error: "",
    };
  },
  created() {
    axios
      .get("http://localhost:8081/api/movies/" + this.$route.params.id)
      .then((result) => {
        this.movies = result.data;
      })
      .catch((err) => {
        this.error = err.message;
      });
  },
};
</script>

<style lang="scss" scoped>
.scale
{
  transform: scale(1.2);
}
</style>