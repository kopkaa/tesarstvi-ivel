<template>
  <GalleryComponent
    :title="'Rekonstrukce - Zubří'"
    :subtitle="'Zde je pár ukázek naši práce'"
    :images="images"
  />
</template>

<script>
import GalleryComponent from '../../components/GalleryComponent.vue'

export default {
  components: {
    GalleryComponent
  },
  data () {
    return {
      index: null,
      images: []
    }
  },
  head () {
    return {
      title: 'Tesařství Ivel | Rekonstrukce - Zubří'
    }
  },

  beforeMount () {
    this.importAll(require.context('../../img/rekonstrukce/zubri', true, /\.(webp|JPG|svg)$/))
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
