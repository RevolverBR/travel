<template>
  <div>
    <div class="wrapper">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        v-if="showSwiper"
      >
        <!-- slides -->
        <swiper-slide v-for="item in list" :key="item.id">
          <img :src="item.imgUrl" class="swiper-img" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
      autoplay: 3000,
      loop: true,
      direction: 'horizontal',
      pagination: '.swiper-pagination'
    }

    const showSwiper = computed(() => {
      return props.list.length
    })

    return { swiperOption, showSwiper }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #FFF !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}

.swiper-img {
  width: 100%;
  height: 2rem;
}
</style>
