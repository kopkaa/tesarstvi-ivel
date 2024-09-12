<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            {{ title }}
          </h1><br>
          <span class="second">{{ subtitle }}</span>
        </div>
      </template>
    </Header>

    <main>
      <div class="gallery gallery--category">
        <div class="back-button">
          <button class="header-button contact-button" aria-label="Back" @click="goBack">
            <img :src="arrow" alt="back"> Zpět
          </button>
        </div>
        <div v-for="(image, i) in images" :key="i" class="gallery-item gallery__item--category" @click="index = i">
          <img class="gallery-image" :src="image" alt="work reference" loading="lazy">
        </div>
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
      </div>
      <button id="scrollButton" title="Nahoru" @click="scrollToTop">
        <img :src="arrow" alt="top">
      </button>
    </main>

    <Footer />
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
import arrow from '../img/prev.png'

export default {
  components: {
    VueGallerySlideshow
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Gallery Title'
    },
    subtitle: {
      type: String,
      required: false,
      default: 'Gallery Subtitle'
    },
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      index: null,
      arrow
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
