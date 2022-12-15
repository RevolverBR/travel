<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        type="text"
        class="search-input"
        placeholder="输入城市名和拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCity(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

import { ref, computed, watch, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  setup(props) {
    const keyword = ref("");
    const list = ref([]);
    let timer = null;
    const store = useStore();
    const router = useRouter();
    const search = ref(null);

    let hasNoData = computed(() => {
      return !list.value.length;
    });

    watch(keyword, (keyword, prevKeyword) => {
      if (timer) {
        clearTimeout(timer);
      }
      if (!keyword) {
        list.value = [];
        return;
      }
      timer = setTimeout(() => {
        const result = [];
        for (let i in props.cities) {
          props.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(keyword) > -1 ||
              value.name.indexOf(keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        list.value = result;
      }, 100);
    });

    function handleCity(city) {
      store.commit("changeCity", city);
      router.push({ name: "Home" });
    }

    onUpdated(() => {
      new Bscroll(search.value, {
        click: true,
      });
    });

    return { keyword, list, hasNoData, search, handleCity };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';
@import '~@/styles/mixins.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    padding: 0 0.1rem;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    border-radius: 0.06rem;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    color: #666;
    padding-left: 0.2rem;
    background: #fff;
  }
}
</style>
