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
    <main id="gallery-drevostavby" />
    <Footer />
  </div>
</template>

<script>
// import arrow from '../../img/prev.png'

// export default {
//   components: {
//   },
//   data () {
//     return {
//       index: null,
//       images: [],
//       IMG_MAX: 20,
//       arrow
//     }
//   },
//   head () {
//     return {
//       title: 'Tesařství Ivel | Dřevostavby'
//     }
//   },

//   mounted () {
//     this.importAll(require.context('../../img/work', true, /\.(webp|JPG|svg)$/))
//   },

//   methods: {

//     goTo (category) {
//       this.$router.push('/kontakt')
//     }
//   }

// }
// </script>
