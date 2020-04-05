<template>
    <div class="home-content mt-12">
        <v-container>
            <!-- Speacial Item -->
            <section class="Special">
                <v-subheader class=" font-weight-bold display-1 d-block mt-12" dark>Hotest</v-subheader>
                <v-subheader dark class="subtitle-1">Tranding This Week</v-subheader>
                    <v-img src="../assets/02.jpg" height="300" gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.2)">
                        <v-card height="100%" color="transparent" dark class="ma-4" flat>
                            <v-card-title class="headline">
                                Mario Maker 2
                            </v-card-title>
                            <v-card-subtitle class="subtitle-1">
                                The v-carousel component expands upon v-window by providing additional features targeted at displaying images.
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Trailer</span>
                                    <v-icon left color="red" medium>mdi-youtube</v-icon>
                                </v-btn>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Watch Now</span>
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-card-text>
                                <v-btn height="50" outlined dark rounded>
                                    <v-img src="../assets/imdb.svg" width="50" class="mr-2"></v-img>
                                    <span>8.4</span>
                                </v-btn>
                                <v-btn height="50" outlined dark rounded class="ml-4">
                                    <span>Blu-Ray</span>
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-img>
                    <v-row>
                        <v-col cols="12" md="3" v-for="specard in specards" :key="specard.id">
                            <v-hover v-slot:default="{ hover }">
                                <v-card height="400" color="transparent" :elevation="hover ? 16 : 2" style="position: relative">
                                    <v-img :src="specard.src" height="100%" :class="{blured : hover}">
                                        <v-card color="rgba(0,0,0,0.66)" dark>
                                            <v-card-actions>
                                                <v-chip color="yellow" outlined>
                                                    <span class="subtitle-1 white--text">4.9</span>
                                                    <v-icon>mdi-star</v-icon>
                                                </v-chip>
                                                <v-spacer></v-spacer>
                                                <v-chip color="blue" outlined>
                                                    <span class="white--text">Blu-Ray</span>
                                                </v-chip>
                                            </v-card-actions>
                                        </v-card>
                                    </v-img>
                                    <v-icon  size="60px" class="icon-blured" dark :class="{opac : hover}">
                                        mdi-information-outline
                                    </v-icon>
                                    <span class="text-blured title" :class="{opac : hover}">More About Avangres</span>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                <v-card class="text-center my-8" color="transparent" flat>
                    <v-btn class="text-center mx-auto" height="50" rounded color="orange darken-2" dark>
                        <span class="subtitle">For More...</span>
                        <v-icon medium>mdi-plus</v-icon>
                    </v-btn>
                </v-card>
                <v-divider></v-divider>                                    
            </section>

            <!-- Movies Item -->

            <section class="Special">
                <v-subheader class=" font-weight-bold display-1 d-block mt-12" dark>Movies</v-subheader>
                <v-subheader dark class="subtitle-1">Tranding This Week</v-subheader>
                    <v-img src="../assets/02.jpg" height="300" gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.2)">
                        <v-card height="100%" color="transparent" dark class="ma-4" flat>
                            <v-card-title class="headline">
                                Mario Maker 2
                            </v-card-title>
                            <v-card-subtitle class="subtitle-1">
                                The v-carousel component expands upon v-window by providing additional features targeted at displaying images.
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Trailer</span>
                                    <v-icon left color="red" medium>mdi-youtube</v-icon>
                                </v-btn>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Watch Now</span>
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-card-text>
                                <v-btn height="50" outlined dark rounded>
                                    <v-img src="../assets/imdb.svg" width="50" class="mr-2"></v-img>
                                    <span>8.4</span>
                                </v-btn>
                                <v-btn height="50" outlined dark rounded class="ml-4">
                                    <span>Blu-Ray</span>
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-img>
                    <v-row>
                        <v-col cols="12" md="3" v-for="specard in specards" :key="specard.id">
                            <v-hover v-slot:default="{ hover }">
                                <v-card height="400" color="transparent" :elevation="hover ? 16 : 2" style="position: relative">
                                    <v-img :src="specard.src" height="100%" :class="{blured : hover}">
                                        <v-card color="rgba(0,0,0,0.66)" dark>
                                            <v-card-actions>
                                                <v-chip color="yellow" outlined>
                                                    <span class="subtitle-1 white--text">4.9</span>
                                                    <v-icon>mdi-star</v-icon>
                                                </v-chip>
                                                <v-spacer></v-spacer>
                                                <v-chip color="blue" outlined>
                                                    <span class="white--text">Blu-Ray</span>
                                                </v-chip>
                                            </v-card-actions>
                                        </v-card>
                                    </v-img>
                                    <v-icon  size="60px" class="icon-blured" dark :class="{opac : hover}">
                                        mdi-information-outline
                                    </v-icon>
                                    <span class="text-blured title" :class="{opac : hover}">More About Avangres</span>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                <v-card class="text-center my-8" color="transparent" flat>
                    <v-btn class="text-center mx-auto" height="50" rounded color="orange darken-2" dark>
                        <span class="subtitle">For More...</span>
                        <v-icon medium>mdi-plus</v-icon>
                    </v-btn>
                </v-card>
                <v-divider></v-divider>                                    
            </section>

            <!-- Tv Shows Item -->

            <section class="Special">
                <v-subheader class=" font-weight-bold display-1 d-block mt-12" dark>Tv Shows</v-subheader>
                <v-subheader dark class="subtitle-1">Tranding This Week</v-subheader>
                    <v-img src="../assets/02.jpg" height="300" gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.2)">
                        <v-card height="100%" color="transparent" dark class="ma-4" flat>
                            <v-card-title class="headline">
                                Mario Maker 2
                            </v-card-title>
                            <v-card-subtitle class="subtitle-1">
                                The v-carousel component expands upon v-window by providing additional features targeted at displaying images.
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Trailer</span>
                                    <v-icon left color="red" medium>mdi-youtube</v-icon>
                                </v-btn>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Watch Now</span>
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-card-text>
                                <v-btn height="50" outlined dark rounded>
                                    <v-img src="../assets/imdb.svg" width="50" class="mr-2"></v-img>
                                    <span>8.4</span>
                                </v-btn>
                                <v-btn height="50" outlined dark rounded class="ml-4">
                                    <span>Blu-Ray</span>
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-img>
                    <v-row>
                        <v-col cols="12" md="3" v-for="specard in specards" :key="specard.id">
                            <v-hover v-slot:default="{ hover }">
                                <v-card height="400" color="transparent" :elevation="hover ? 16 : 2" style="position: relative">
                                    <v-img :src="specard.src" height="100%" :class="{blured : hover}">
                                        <v-card color="rgba(0,0,0,0.66)" dark>
                                            <v-card-actions>
                                                <v-chip color="yellow" outlined>
                                                    <span class="subtitle-1 white--text">4.9</span>
                                                    <v-icon>mdi-star</v-icon>
                                                </v-chip>
                                                <v-spacer></v-spacer>
                                                <v-chip color="blue" outlined>
                                                    <span class="white--text">Blu-Ray</span>
                                                </v-chip>
                                            </v-card-actions>
                                        </v-card>
                                    </v-img>
                                    <v-icon  size="60px" class="icon-blured" dark :class="{opac : hover}">
                                        mdi-information-outline
                                    </v-icon>
                                    <span class="text-blured title" :class="{opac : hover}">More About Avangres</span>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                <v-card class="text-center my-8" color="transparent" flat>
                    <v-btn class="text-center mx-auto" height="50" rounded color="orange darken-2" dark>
                        <span class="subtitle">For More...</span>
                        <v-icon medium>mdi-plus</v-icon>
                    </v-btn>
                </v-card>
                <v-divider></v-divider>                                    
            </section>
            <!-- Animes Item -->

            <section class="Special">
                <v-subheader class=" font-weight-bold display-1 d-block mt-12" dark>Animes</v-subheader>
                <v-subheader dark class="subtitle-1">Tranding This Week</v-subheader>
                    <v-img src="../assets/02.jpg" height="300" gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.2)">
                        <v-card height="100%" color="transparent" dark class="ma-4" flat>
                            <v-card-title class="headline">
                                Mario Maker 2
                            </v-card-title>
                            <v-card-subtitle class="subtitle-1">
                                The v-carousel component expands upon v-window by providing additional features targeted at displaying images.
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Trailer</span>
                                    <v-icon left color="red" medium>mdi-youtube</v-icon>
                                </v-btn>
                                <v-btn outlined height="50" width="150">
                                    <span class="subtitle-1">Watch Now</span>
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-card-text>
                                <v-btn height="50" outlined dark rounded>
                                    <v-img src="../assets/imdb.svg" width="50" class="mr-2"></v-img>
                                    <span>8.4</span>
                                </v-btn>
                                <v-btn height="50" outlined dark rounded class="ml-4">
                                    <span>Blu-Ray</span>
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-img>
                    <v-row>
                        <v-col cols="12" md="3" v-for="specard in specards" :key="specard.id">
                            <v-hover v-slot:default="{ hover }">
                                <v-card height="400" color="transparent" :elevation="hover ? 16 : 2" style="position: relative">
                                    <v-img :src="specard.src" height="100%" :class="{blured : hover}">
                                        <v-card color="rgba(0,0,0,0.66)" dark>
                                            <v-card-actions>
                                                <v-chip color="yellow" outlined>
                                                    <span class="subtitle-1 white--text">4.9</span>
                                                    <v-icon>mdi-star</v-icon>
                                                </v-chip>
                                                <v-spacer></v-spacer>
                                                <v-chip color="blue" outlined>
                                                    <span class="white--text">Blu-Ray</span>
                                                </v-chip>
                                            </v-card-actions>
                                        </v-card>
                                    </v-img>
                                    <v-icon  size="60px" class="icon-blured" dark :class="{opac : hover}">
                                        mdi-information-outline
                                    </v-icon>
                                    <span class="text-blured title" :class="{opac : hover}">More About Avangres</span>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                <v-card class="text-center my-8" color="transparent" flat>
                    <v-btn class="text-center mx-auto" height="50" rounded color="orange darken-2" dark>
                        <span class="subtitle">For More...</span>
                        <v-icon medium>mdi-plus</v-icon>
                    </v-btn>
                </v-card>                                
            </section>             
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            specards: [
                {src: require('../assets/avengers.jpg')},
                {src: require('../assets/avengers.jpg')},
                {src: require('../assets/avengers.jpg')},
                {src: require('../assets/avengers.jpg')},                 
            ],
        slides: [
            {src: require('../assets/avengers.jpg')},
            {src: require('../assets/avengers.jpg')},
            {src: require('../assets/avengers.jpg')},
        ],
            blured: ''
        }
    },
}
</script>

<style>
</style>
