<template>
  <div v-if="isOpen" class="lightbox" @keyup.esc="closeLightbox">
    <div class="lightbox__wrapper">
      <span title="Close" class="close" @click="closeLightbox">&times;</span>
      <img :src="images[thumbnail]">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: Number,
      required: true
    },
    images: {
      type: Array,
      required: true
    },

    isOpen: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      index: 0
    }
  },

  mounted () {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeLightbox()
      }
    })
  },

  methods: {
    closeLightbox () {
      this.$emit('closeLightbox', false)
    }
  }

}
</script>
