<template>
  <v-gallery
  :content="content"
  />
</template>

<script>
import VGallery from '@/components/v-gallery/index.vue'
export default {
  components: {
    "v-gallery": VGallery
  },
  async asyncData({ store }) {
    const content = await store.dispatch("photos/fetchPhotos");
    return { content }
  },
  data() {
    return {
      content: []
    }
  }
  
}
</script>

<style lang="scss" scoped>
  
</style>
