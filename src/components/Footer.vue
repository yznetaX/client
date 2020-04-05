<template>
  <v-card class="mt-12">
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="grey darken-4 text-center"
      >
        <v-card-text>
            <v-tooltip bottom v-for="icon in icons" :key="icon.id">
                <template v-slot:activator="{ on }">
                    <v-btn
                        :to="icon.route"
                        route
                        dark
                        class="mx-4"
                        icon
                        v-on="on"
                    >
                        <v-icon size="32px">{{ icon.icon }}</v-icon>
                    </v-btn>
                </template>
                <span>{{icon.tooltip}}</span>
            </v-tooltip>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>




<script>
  export default {
    data: () => ({
      icons: [
        {icon: 'mdi-home', route: '/', tooltip: 'Home'},
        {icon: 'mdi-shield-key-outline', route: '/sitekey', tooltip: 'Site Keys'},
        {icon: 'mdi-movie-outline', route: '/movies', tooltip: 'Movies'},
        {icon: 'mdi-television-box', route: '/tvshows', tooltip: 'Tvshows'},
        {icon: 'mdi-mushroom-outline', route: '/animes', tooltip: 'Animes'},
      ],
      padless: true,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>