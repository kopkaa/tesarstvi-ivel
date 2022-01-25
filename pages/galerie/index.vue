<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Galerie
          </h1><br>
          <!-- <span class="second">Zde je pár ukázek naši práce</span> -->
        </div>
      </template>
    </Header>
    <main id="gallery">
      <h2>Zde můžete najít pár ukázek naši práce</h2>
      <div class="gallery">
        <div><span>Dřevostavby</span></div>
        <div><span>Střechy</span></div>
      </div>
      <div class="gallery gallery--second">
        <div><span>Přístřešky a pergoly</span></div>
        <div><span>Rekonstrukce</span></div>
      </div>
      <!--
      <div class="wrapper">
        <button class="header-button contact-button" @click="loadMore">
          Načíst více
        </button>
      </div>
      <button id="scrollButton" title="Nahoru">
        <img :src="arrow" alt="top">
      </button> -->
    </main>
    <Footer />
  </div>
</template>

<script>
// import VueGallerySlideshow from 'vue-gallery-slideshow'
import arrow from '../../img/prev.png'

export default {
  components: {
    // VueGallerySlideshow
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
