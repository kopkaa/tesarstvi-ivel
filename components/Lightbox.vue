<template>
  <div v-if="isOpen" class="lightbox">
    <div class="lightbox__wrapper">
      <span title="Close" class="close" @click="closeLightbox">&times;</span>
      <img src="../img/work/01.jpg">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
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

  methods: {
    closeLightbox () {
      this.$emit('closeLightbox', false)
    }
  }

}
</script>
