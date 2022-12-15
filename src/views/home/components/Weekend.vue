<template>
  <div class="wrapper">
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-dsc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl';

.title {
  margin-top: 0.1rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.3rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
  .item-img {
    width: 100%
  }
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.3rem;
  ellipsis();
}

.item-dsc {
  line-height: 0.4rem;
  font-size: .26rem
  color: #ccc;
}

.item-price {
  margin-top: 0.08rem;
  font-size: 0.18rem;
  color: #ff7400;
}

</style>
