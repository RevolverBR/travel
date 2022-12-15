<template>
  <div>
    <HomeHeader />
    <HomeSwiper :list="data.swiperList" />
    <HomeIcons :list="data.iconList" />
    <HomeRecommend :list="data.recommendList" />
    <HomeWeekend :list="data.weekendList" />
  </div>
</template>

<script>
import axios from "axios";
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import { useStore } from "vuex";
import { reactive, computed, onMounted, onActivated } from "vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  setup() {
    const data = reactive({
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    });

    const store = useStore();
    const city = computed(() => {
      return store.state.city;
    });

    //请求数据
    function getHomeInfo() {
      axios
        .get("static/mock/index.json?city=" + city.value)
        .then(getHomeInfoSucc);
    }
    async function getHomeInfoSucc(res) {
      axios
        .get("static/mock/index.json?city=" + city.value)
        .then(getHomeInfoSucc);
      res = res.data;
      if (res.ret && res.data) {
        const result = res.data;
        data.swiperList = result.swiperList
        data.iconList = result.iconList;
        data.recommendList = result.recommendList;
        data.weekendList = result.weekendList;
      }
    }

    onMounted(() => {
      data.lastCity = city.value;
      getHomeInfo();
    })

    onActivated(() => {
      if (data.lastCity !== city.value) {
      data.lastCity = city;
      getHomeInfo();
    }
    })
    return { data };
  }
  // computed: {
  //   ...mapState(['city'])
  // },
  // methods: {
  //   getHomeInfo() {
  //     axios
  //       .get("static/mock/index.json?city=" + this.city)
  //       .then(this.getHomeInfoSucc);
  //   },
  //   getHomeInfoSucc(res) {
  //     res = res.data;
  //     if (res.ret && res.data) {
  //       const data = res.data;
  //       this.swiperList = data.swiperList;
  //       this.iconList = data.iconList;
  //       this.recommendList = data.recommendList;
  //       this.weekendList = data.weekendList;
  //     }
  //   },
  // },
  // mounted() {
  //   this.lastCity = this.city;
  //   this.getHomeInfo();
  // },
  // activated() {
  //   if (this.lastCity !== this.city) {
  //     this.lastCity = this.city;
  //     this.getHomeInfo();
  //   }
  // },
}
</script>