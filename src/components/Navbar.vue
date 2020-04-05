<template>
    <nav class="navbar">
        <v-app-bar color="grey darken-4" shrink-on-scroll prominent>
            <v-chip class="ma-auto" to="/" dark>Logo</v-chip>
            <v-spacer></v-spacer>
            <v-dialog width="800">
                <template v-slot:activator="{ on }">
                    <v-btn class="my-auto" x-large icon dark text v-on="on">
                        <v-icon>mdi-card-plus-outline</v-icon>
                    </v-btn>           
                </template>
                <v-card dark color="grey darken-4" elevation="15">
                    <v-card-title class="text-center d-block mb-6 display-1 font-weight-bold">
                        Add New Item
                    </v-card-title>
                </v-card>
            </v-dialog>
            <!-- // Sign In Bottom -->
            <v-dialog width="800">
                <template v-slot:activator="{ on }">
                    <v-btn class="my-auto" dark text icon v-on="on">
                        <v-icon x-large>mdi-account-outline</v-icon>
                    </v-btn>                    
                </template>
                <v-card dark color="grey darken-4" elevation="15">
                    <v-card-title class="text-center d-block mb-6 display-1 font-weight-bold">
                        Log In
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field outlined id="email" type="email" placeholder="Your Email...." label="Email" append-outer-icon="mdi-account-outline"
                            ></v-text-field>
                            <v-text-field outlined id="password" placeholder="Your Password...." label="Password" append-outer-icon="mdi-account-lock-outline"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            ></v-text-field>
                            <v-btn color="grey darken-3">
                                <span>Log In</span>
                            </v-btn>
                        </v-form>
                        <v-card-text class="text-center">
                            <v-btn text>
                                <span>Forgot your password ?</span>
                            </v-btn>
                        </v-card-text>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <!-- // Sign Up Bottom -->
            <v-dialog width="800">
                <template v-slot:activator="{ on }">
                    <v-btn class="my-auto mr-12" dark text icon v-on="on">
                        <v-icon x-large>mdi-account-plus-outline</v-icon>
                    </v-btn>                    
                </template>
                <v-card dark color="grey darken-4" elevation="15">
                    <v-card-title class="text-center d-block mb-6 display-1 font-weight-bold">
                        Sign Up
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field outlined id="email" type="email" placeholder="Your Email...." label="Email" append-outer-icon="mdi-account-outline"
                            ></v-text-field>
                            <v-text-field outlined id="password" placeholder="Your Password...." label="Password" append-outer-icon="mdi-account-lock-outline"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            ></v-text-field>
                            <v-text-field outlined id="password" placeholder="Confirm Your Password...." label="Password" append-outer-icon="mdi-account-lock-outline"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            ></v-text-field>
                            <v-btn color="grey darken-3">
                                <span>Sign Up</span>
                            </v-btn>
                        </v-form>
                        <v-card-text class="text-center">
                            <v-btn color="indigo darken-1" height="50" rounded depressed>
                                <span class="subtitle-1">Sign Up With Facebook</span>
                                <v-img src="../assets/facebook.svg" width="30"></v-img>
                            </v-btn>
                        </v-card-text>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-app-bar>
    </nav>
</template>

<script>

export default {
    data(){
        return{
            show: false,
            movies: [
                {one: 'War'},
                {one: 'History'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'}
            ],
            tvshows: [
                {one: 'War'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'}
            ],
            animes: [
                {one: 'War'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'},
                {one: 'War'}
            ],
        }
    }
}
</script>

<!--
                <v-list class="ma-auto" color="transparent">
                <v-list-item  class="d-inline-block">
                    <v-dialog  width="600">
                        <template v-slot:activator="{on}">
                            <v-btn width="100" height="50"  v-on="on">
                                <v-icon medium>mdi-movie-outline</v-icon>
                                <span>Movie</span>
                            </v-btn>                            
                        </template>
                        <v-list>
                            <v-list-item-title class="text-center headline my-4 font-weight-bold">Category</v-list-item-title>
                            <v-list-item v-for="movie in movies" :key="movie.id" class="d-inline-block">
                                <v-btn color="blue darken-3 white--text">{{movie.one}}</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-dialog>
                </v-list-item>

                <v-list-item  class="d-inline-block">
                    <v-dialog  width="600">
                        <template v-slot:activator="{on}">
                            <v-btn width="100" height="50"  v-on="on">
                                <v-icon medium>mdi-television-box</v-icon>
                                <span>Tv-Show</span>
                            </v-btn>                            
                        </template>
                        <v-list>
                            <v-list-item-title class="text-center headline my-4 font-weight-bold">Category</v-list-item-title>
                            <v-list-item v-for="tvshow in tvshows" :key="tvshow.id" class="d-inline-block">
                                <v-btn color="blue darken-3 white--text">{{tvshow.one}}</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-dialog>
                </v-list-item>

                <v-list-item  class="d-inline-block">
                    <v-dialog  width="600">
                        <template v-slot:activator="{on}">
                            <v-btn width="100" height="50"  v-on="on">
                                <v-icon medium>mdi-mushroom-outline</v-icon>
                                <span>Anime</span>
                            </v-btn>                            
                        </template>
                        <v-list>
                            <v-list-item-title class="text-center headline my-4 font-weight-bold">Category</v-list-item-title>
                            <v-list-item v-for="anime in animes" :key="anime.id" class="d-inline-block">
                                <v-btn color="blue darken-3 white--text">{{anime.one}}</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-dialog>
                </v-list-item>
            </v-list>
            -->