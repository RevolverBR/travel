<template>
  <div class="wrapper">
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="`/detail/${item.id}`"
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-dsc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
          <p class="item-price">&yen;{{ item.price }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array,
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl';

.title {
  margin-top: 0.1rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.3rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.08rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-dsc {
      line-height: 0.4rem;
      color: #ccc;
    }

    .item-button {
      margin: 0.05rem 0;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      color: #fff;
    }

    .item-price {
      margin-top: 0.08rem;
      font-size: 0.18rem;
      color: #ff7400;
    }
  }
}
</style>
