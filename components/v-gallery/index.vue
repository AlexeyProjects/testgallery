<template>
  <div class="gallery">
    <div class="gallery__title">
      More Polina's photos
    </div>
    <div class="gallery-list">
      <div 
      class="gallery-list__item" 
      :key="index"
      @click="openGalleryImage(index)"
      v-for="(item, index) in galleryImages">
        <img :src="item.url" alt="">
      </div>
    </div>
    <no-ssr>
      <LightGallery
      :settings="settingsGallery"
      :index="galleryIndex"
      :images="galleryImages"
      @close="galleryIndex = null"
      >
        
      </LightGallery>
    </no-ssr>
  </div>  
</template>

<script>
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

export default {
  props: {
    content: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      
      galleryIndex: null,
      settingsGallery: { 
        speed: 500, 
        plugins: [lgZoom, lgVideo, lgThumbnail],
        mode: 'lg-zoom-in',
        thumbnail: true,
      }
    }
  },
  methods: {
    openGalleryImage(index) {
      this.galleryIndex = index
    }
  },
  computed: {
    galleryImages() {
      var newArray = []
      this.content.photos.forEach((element, index) => {
        newArray.push({
          url: element.origin
        })
      });
      return newArray
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-thumbnail.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
  .gallery {
    &-list {
      display: flex;
      &__item {
        max-width: 400px;
        max-height: 400px;
        img {
          max-width: 100%;
        }
      }
    }
  }
</style>