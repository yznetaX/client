<template>
    <div class="sliders mt-12">
        <v-row>
            <!-- Left Sldier -->
            <v-col cols="12" sm="3" md="3" class="pa-0">
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiters
                    :show-arrows="false"
                    v-model="slider"
                >
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <v-sheet
                        height="100%"
                        color="transparent"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <v-img :src="slide.leftsrc">

                        </v-img>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>                  
            </v-col>
            <!-- Main Slider -->
            <v-col cols="12" sm="6" md="6" class="pa-0">
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiters
                    show-arrows-on-hover
                    v-model="slider"                    
                >
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <v-sheet
                        height="100%"
                        color="transparent"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <v-img :src="slide.src">

                        </v-img>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>    
            </v-col>
            <!-- Right Slider -->
            <v-col cols="12" sm="3" md="3" class="pa-0">
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiters
                    :show-arrows="false"
                    v-model="slider"
                >
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <v-sheet
                        color="transparent"
                        height="100%"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <v-img :src="slide.rightsrc">

                        </v-img>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>                  
            </v-col>            
        </v-row>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        slides: [
            {src: require('../assets/avengers.jpg'), leftsrc: require('../assets/blur-img/avengers.jpg'), rightsrc: require('../assets/blur-img/avengers.jpg')},
            {src: require('../assets/avengers.jpg'), leftsrc: require('../assets/blur-img/avengers.jpg'), rightsrc: require('../assets/blur-img/avengers.jpg')},
            {src: require('../assets/avengers.jpg'), leftsrc: require('../assets/blur-img/avengers.jpg'), rightsrc: require('../assets/blur-img/avengers.jpg')},
            {src: require('../assets/avengers.jpg'), leftsrc: require('../assets/blur-img/avengers.jpg'), rightsrc: require('../assets/blur-img/avengers.jpg')},
            {src: require('../assets/avengers.jpg'), leftsrc: require('../assets/blur-img/avengers.jpg'), rightsrc: require('../assets/blur-img/avengers.jpg')},
        ],
        slider: null
      }
    },
  }
</script>