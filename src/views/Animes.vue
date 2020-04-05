<template>
  <div class="anime-section">
    <v-card elevation-24>
      <v-img src="../assets/animes.jpg" height="450">
        <v-card color="transparent" class="mt-12 ml-12" flat>
          <v-card-actions>
            <v-btn height="100" width="200" dark color="grey darken-4" elevation="20">
              <span class="title">Animes</span>
              <v-icon right large class="ml-4">mdi-pinwheel-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-img>
    </v-card>        
    <v-container>
      <v-row>
        <v-col cols="12" md="10">
            <v-form>
                <v-text-field outlined dark height="70" placeholder="Search On Movie Or Tvshow :)" label="Search" type="search" background-color="grey darken-3"></v-text-field>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      sections: [
        { title: "War Movie", route: "/" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" },
        { title: "War Movie", route: "" }
      ]
    };
  }
};
</script>