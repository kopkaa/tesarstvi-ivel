<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Galerie
          </h1><br>
          <span class="second">Zde je pár ukázek naši práce</span>
        </div>
      </template>
    </Header>
    <main id="gallery">
      <h2>Zde můžete najít pár ukázek naši práce</h2>
      <div class="gallery">
        <div v-for="(image, i) in images.slice(0,IMG_MAX)" :key="i" class="gallery-item" @click="index = i">
          <img class="gallery-image" :src="image" rel="preload" alt="work reference">
        </div>
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
      </div>
      <div class="wrapper">
        <button class="header-button contact-button" @click="loadMore">
          Načíst více
        </button>
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
      title: 'Tesařství Ivel | Galerie'
    }
  },

  mounted () {
    this.importAll(require.context('../../img/work', true, /\.(webp|JPG|svg)$/))
  },

  methods: {
    importAll (r) {
      r.keys().forEach(key => (this.images.push(r(key))))
    },

    loadMore () {
      this.IMG_MAX += 20
    }
  }

}
</script>
