<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Dřevostavby
          </h1><br>
          <span class="second">Zde je pár ukázek naši práce</span>
        </div>
      </template>
    </Header>
    <main id="gallery-drevostavby">
      <div class="gallery gallery--category">
        <div v-for="(image, i) in images.slice(0,IMG_MAX)" :key="i" class="gallery-item gallery__item--category" @click="index = i">
          <img class="gallery-image" :src="image" rel="preload" alt="work reference">
        </div>
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
      </div>
      <button id="scrollButton" title="Nahoru">
        <img :src="arrow" alt="top">
      </button>
    </main>
    <Footer />
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
import arrow from '../../img/prev.png'

export default {
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      index: null,
      images: [],
      IMG_MAX: 20,
      arrow
    }
  },
  head () {
    return {
      title: 'Tesařství Ivel | Dřevostavby'
    }
  },

  beforeMount () {
    this.importAll(require.context('../../img/drevostavby', true, /\.(webp|JPG|svg)$/))
  },

  created () {
    console.log('IMAGES', this.images)
  },

  methods: {
    importAll (r) {
      r.keys().forEach(key => (this.images.push(r(key))))
    },

    goTo () {
      this.$router.push('/galerie')
    }
  }

}
</script>
