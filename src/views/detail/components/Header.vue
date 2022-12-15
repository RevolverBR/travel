<template>
  <div>
    <div class="header-abs" v-show="showAbs">
      <router-link to="/">
        <div class="iconfont header-abs-back">&#xe7ed;</div>
      </router-link>
    </div>

    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe7ed;</div>
      </router-link>
      <div class="header-fixed-title">景点详情</div>
    </div>
  </div>
</template>

<script>
import { onActivated, onDeactivated, reactive, ref } from "vue";
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  setup() {
    const showAbs = ref(true);
    const opacityStyle = reactive({
      opacity: 0,
    });

    function handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        opacityStyle.opacity = opacity;
        showAbs.value = false;
      } else {
        showAbs.value = true;
      }
    }

    onActivated(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onDeactivated(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return { showAbs, opacityStyle };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #000;
  background: $bgColor;
  font-size: 0.32rem;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>
