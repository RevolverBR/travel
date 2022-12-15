<template>
  <div class="wrapper">
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back">&#xe7ed;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.header {
  overflow: hidden;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  font-size: 0.34rem;
  color: #fff;
  background: $bgColor;
  text-align: center;

  .header-back {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.5rem;
    width: .64rem;
    color: #fff
  }
}
</style>
