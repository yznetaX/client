<template>
  <div class="home">
    <Sections></Sections>
    <Slider></Slider>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/Slider'
import HomeContent from '../components/HomeContent'
import Sections from '../components/Sections'
export default {
  name: "Home",
  components: {
    Slider,
    HomeContent,
    Sections
  }
};
</script>
