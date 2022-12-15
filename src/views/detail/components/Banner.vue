<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe617;</span>
          {{ gallaryImgs.length }}
        </div>
      </div>
    </div>
    <AnimationFade>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleClose"
      />
    </AnimationFade>
  </div>
</template>

<script>
import CommonGallary from "../../../common/gallary/Gallary";
import AnimationFade from "../../../common/fade/Fade";
import { ref } from 'vue'

export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    AnimationFade,
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  setup(props) {
    let showGallary = ref(false);

    function handleShowGallary() {
      showGallary.value = true;
    }
    function handleClose() {
      showGallary.value = false;
    }

    return {
      showGallary,
      handleShowGallary,
      handleClose,
    };
  },
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
