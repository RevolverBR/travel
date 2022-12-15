<template>
  <div>
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    />
    <DetailHeader />
    <div class="content">
      <DetailList :list="categoryList" />
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
import { useRoute } from "vue-router";
import { ref, onMounted, onActivated } from "vue";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  setup() {
    const route = useRoute();
    let lastRouteId = "";
    const sightName = ref("");
    const bannerImg = ref("");
    const gallaryImgs = ref([]);
    const categoryList = ref([]);

    async function getDetailInfo() {
      let res = await axios.get("static/mock/detail.json", {
        params: { id: route.params.id },
      });
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        sightName.value = data.sightName;
        bannerImg.value = data.bannerImg;
        gallaryImgs.value = data.gallaryImgs;
        categoryList.value = data.categoryList;
      }
    }

    onMounted(() => {
      lastRouteId = route.params.id;
      getDetailInfo();
    });
    onActivated(() => {
      lastRouteId = route.params.id;
      getDetailInfo();
    });

    return { lastRouteId, sightName, bannerImg, gallaryImgs, categoryList };
  },
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
