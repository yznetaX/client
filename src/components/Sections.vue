<template>
    <div class="sections my-12">
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
            <v-card color="transparent" flat>
                <v-row>

                    <!-- Movies Section -->
                    <v-col cols="12" md="4" >
                        <v-dialog width="700">
                            <template v-slot:activator="{ on }">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card :color="hover ? 'orange darken-2' : 'grey darken-3'" dark id="cardsection" v-on="on">
                                        <v-card-title class="text-center d-block headline">Movies</v-card-title>
                                        <v-card-actions class="text-center d-block">
                                            <v-icon x-large>mdi-movie-open-outline</v-icon>
                                        </v-card-actions>
                                        <v-card-subtitle class="text-center">
                                            We Speak Movies Language
                                            <v-icon>mdi-emoticon-wink-outline</v-icon>
                                        </v-card-subtitle>
                                    </v-card>
                                </v-hover>
                            </template>
                            <v-list color="grey darken-4" dark>
                                <v-list-item-title class="text-center display-1 my-6">
                                    Categories
                                </v-list-item-title>
                                <v-list-item v-for="movie in movies" :key="movie.id" class="d-inline-block">
                                    <v-btn color="grey darken-3" route :to="movie.route">{{movie.cat}}</v-btn>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-btn class="text-center mx-auto my-4" color="orange darken-2" route to="/movies">
                                        All The Item
                                    </v-btn>
                                </v-list-item>                                
                            </v-list>
                        </v-dialog>
                    </v-col>

                    <!-- Tv Show Section -->
                    <v-col cols="12" md="4" >
                        <v-dialog width="700">
                            <template v-slot:activator="{ on }">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card :color="hover ? 'orange darken-2' : 'grey darken-3'" dark id="cardsection" v-on="on">
                                        <v-card-title class="text-center d-block headline">Tv Shows</v-card-title>
                                        <v-card-actions class="text-center d-block">
                                            <v-icon x-large>mdi-television</v-icon>
                                        </v-card-actions>
                                        <v-card-subtitle class="text-center">
                                            We Speak Tv Shows Language
                                            <v-icon>mdi-emoticon-wink-outline</v-icon>
                                        </v-card-subtitle>
                                    </v-card>
                                </v-hover>
                            </template>
                            <v-list color="grey darken-4" dark>
                                <v-list-item-title class="text-center display-1 my-6">
                                    Categories
                                </v-list-item-title>
                                <v-list-item v-for="tv in tvs" :key="tv.id" class="d-inline-block">
                                    <v-btn color="grey darken-3" route :to="tv.route">{{tv.cat}}</v-btn>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-btn class="text-center mx-auto my-4" color="orange darken-2" route to="/tvshows">
                                        All The Item
                                    </v-btn>
                                </v-list-item>                                
                            </v-list>
                        </v-dialog>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-dialog width="700">
                            <template v-slot:activator="{ on }">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card :color="hover ? 'orange darken-2' : 'grey darken-3'" dark id="cardsection" v-on="on">
                                        <v-card-title class="text-center d-block headline">Animes</v-card-title>
                                        <v-card-actions class="text-center d-block">
                                            <v-icon x-large>mdi-pinwheel-outline</v-icon>
                                        </v-card-actions>
                                        <v-card-subtitle class="text-center">
                                            We Speak Animes Language
                                            <v-icon>mdi-emoticon-wink-outline</v-icon>
                                        </v-card-subtitle>
                                    </v-card>
                                </v-hover>
                            </template>
                            <v-list color="grey darken-4" dark>
                                <v-list-item-title class="text-center display-1 my-6">
                                    Categories
                                </v-list-item-title>
                                <v-list-item v-for="anime in animes" :key="anime.id" class="d-inline-block">
                                    <v-btn color="grey darken-3" route :to="anime.route">{{anime.cat}}</v-btn>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-btn class="text-center mx-auto my-4" color="orange darken-2" route to="/animes">
                                        All The Item
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            movies: [
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
            ],
            tvs: [
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
            ],
            animes: [
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
                {cat: 'war', route: '/'},
            ]
        }
    }
}
</script>


<style lang="scss">
#cardsection
{
    transition: all .3s ease-in-out;
}
</style>