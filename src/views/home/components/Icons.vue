<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc" />
          </div>
          <div class="icon-desc">{{ item.desc }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "HomeIcons",
  props: {
    list: Array,
  },
  setup(props) {
    const swiperOption = {
      autoplay: false,
    };

    const pages = computed(() => {
      const pages = [];
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });

      return pages;
    });

    return { swiperOption, pages };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl';

.wrapper {
  width: 100%;
  height: 44% vw;
  overflow: hidden;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    height: 1.6rem;
    width: 25%;

    .icon-img {
      position: relative;
      width: 100%;
      height: 74%;
      overflow: hidden;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      height: 20%;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.12rem;
      color: #333;
      ellipsis();
    }
  }
}
</style>
