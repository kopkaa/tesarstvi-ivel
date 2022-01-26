<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Galerie
          </h1><br>
        </div>
      </template>
    </Header>
    <main id="gallery">
      <h2>Zde můžete najít pár ukázek naši práce</h2>
      <div class="gallery">
        <div class="gallery__item" @click="goTo('drevostavby')">
          <span>Dřevostavby</span>
        </div>
        <div class="gallery__item" @click="goTo('strechy')">
          <span>Střechy</span>
        </div>
      </div>
      <div class="gallery gallery--second">
        <div class="gallery__item" @click="goTo('pristresky')">
          <span>Přístřešky a pergoly</span>
        </div>
        <div class="gallery__item" @click="goTo('rekonstrukce')">
          <span>Rekonstrukce</span>
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
      arrow
    }
  },
  head () {
    return {
      title: 'Tesařství Ivel | Galerie'
    }
  },

  methods: {

    goTo (category) {
      this.$router.push(`/galerie/${category}`)
    }
  }

}
</script>
