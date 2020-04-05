<template>
<div class="my-12">
  <v-container>
    <v-timeline align-top>
      <v-timeline-item icon="mdi-heart" fill-dot right>
        <v-card dark color="blue darken-3">
              <v-card-title>
                <v-btn light class="ma-auto d-block">
                    <span>Download</span>
                    <v-icon>mdi-download-multiple</v-icon>
                </v-btn>            
              </v-card-title>   
              <v-divider></v-divider>           
              <v-card-subtitle class="title text-center">
                This Is Key For Direct Download
              </v-card-subtitle>
        </v-card>
      </v-timeline-item>
      <v-timeline-item icon="mdi-heart" fill-dot left>
        <v-card dark color="blue darken-3">
              <v-card-title>
                <v-btn class="ma-auto d-block" light>
                    <span>Download</span>
                    <v-img src="../assets/utorrent.svg"></v-img>
                </v-btn>             
              </v-card-title>   
              <v-divider></v-divider>           
              <v-card-subtitle class="title text-center">
                This Is Key For Torrent Download
              </v-card-subtitle>
        </v-card>
      </v-timeline-item>
      <v-timeline-item icon="mdi-heart" fill-dot right>
        <v-card dark color="blue darken-3">
              <v-card-title>
                <v-btn light class="ma-auto d-block">
                    <span>Download</span>
                    <v-icon>mdi-download-multiple</v-icon>
                </v-btn>            
              </v-card-title>   
              <v-divider></v-divider>           
              <v-card-subtitle class="title text-center">
                This Is Key For Direct Download
              </v-card-subtitle>
        </v-card>
      </v-timeline-item>            
    </v-timeline>
  </v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>

<style scoped>

</style>