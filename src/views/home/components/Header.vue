<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe7fe;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe699;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }}
        <span class="iconfont">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .iconfont {
      font-size: 0.3rem;
      margin-left: 0.15rem;
    }
  }

  .header-search {
    flex: 1;
    margin: 0.12rem 0;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    height: 0.62rem;
    line-height: 0.62rem;
    font-size: 0.25rem;

    .iconfont {
      margin-right: 0.1rem;
      font-size: 0.3rem;
      position: relative;
      top: 0.02rem;
    }
  }

  .header-right {
    margin: 0 .12rem;
    min-width: 1.24rem;
    float: right;
    text-align: center;
    color: #FFF
  }
}
</style>
