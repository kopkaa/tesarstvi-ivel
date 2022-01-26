<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Střechy
          </h1><br>
          <span class="second">Zde je pár ukázek naši práce</span>
        </div>
      </template>
    </Header>
    <main>
      <div class="gallery gallery--category">
        <div v-for="(image, i) in images.slice(0,IMG_MAX)" :key="i" class="gallery-item gallery__item--category" @click="index = i">
          <img class="gallery-image" :src="image" alt="work reference" loading="lazy">
        </div>
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
        <div class="back-button">
          <button class="header-button contact-button" aria-label="Back" @click="goBack">
            <img :src="arrow" alt="back"> Zpět
          </button>
        </div>
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
      IMG_MAX: 50,
      arrow
    }
  },
  head () {
    return {
      title: 'Tesařství Ivel | Střechy'
    }
  },

  beforeMount () {
    this.importAll(require.context('../../img/strechy', true, /\.(webp|JPG|svg)$/))
  },

  methods: {
    importAll (r) {
      r.keys().forEach(key => (this.images.push(r(key))))
    },

    goBack () {
      this.$router.go(-1)
    }
  }

}
</script>
