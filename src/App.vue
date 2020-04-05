<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return{

    }
  },
  watch: {
  '$route' (to) {
      document.title = to.meta.title || 'Your Website'
    }
  }
}
</script>

<style lang="scss">
.theme--light.v-application{
  background-color: #212121 !important
}
</style>