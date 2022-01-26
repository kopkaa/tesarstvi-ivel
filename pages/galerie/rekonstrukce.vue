<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Rekonstrukce
          </h1><br>
          <span class="second">Zde je pár ukázek naši práce</span>
        </div>
      </template>
    </Header>
    <main>
      <div class="gallery gallery--category">
        <div class="gallery__item gallery__item--rekonstrukce" @click="goTo('drevostavby')">
          <span>Švédsko</span>
        </div>
        <div class="gallery__item gallery__item--rekonstrukce" @click="goTo('strechy')">
          <span>Zubří</span>
        </div>
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

import arrow from '../../img/prev.png'

export default {

  data () {
    return {
      index: null,
      images: {
        zubri: []
      },
      IMG_MAX: 50,
      arrow
    }
  },
  head () {
    return {
      title: 'Tesařství Ivel | Rekonstrukce'
    }
  },

  beforeMount () {
    this.importZubri(require.context('../../img/rekonstrukce/zubri', true, /\.(webp|JPG|svg)$/))
  },

  methods: {
    importZubri (r) {
      r.keys().forEach(key => (this.images.zubri.push(r(key))))
    },

    importSvedsko (r) {
      r.keys().forEach(key => (this.images.svedsko.push(r(key))))
    },

    goBack () {
      this.$router.go(-1)
    }
  }

}
</script>
