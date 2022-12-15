<template>
  <div>
    <CityHeader />
    <CitySearch :cities="data.cities" />
    <CityList :cities="data.cities" :hot="data.hotCities" :letter="letter" />
    <CityAlphabet :cities="data.cities" @change="handleLetterChange" />
  </div>
</template>

<script>
import axios from "axios";

import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import { reactive, onMounted, ref } from "vue";

function useCityLogic() {
  const data = reactive({
    hotCities: [],
    cities: {},
  });
  async function getCityInfo() {
    let res = await axios.get("static/mock/city.json");
    res = res.data;
    if (res.ret && res.data) {
      const result = res.data;
      data.hotCities = result.hotCities;
      data.cities = result.cities;
    }
  }
  onMounted(()=> {
    getCityInfo()
  })

  return {data}
}

function useLetterLogin() {
  const letter = ref('')
  function handleLetterChange(selected) {
    letter.value = selected
  }

  return { letter, handleLetterChange }
}

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  setup() {
    const { letter, handleLetterChange } = useLetterLogin()
    const { data } = useCityLogic()

    return { data, letter, handleLetterChange };
  },
};
</script>

<style lang="stylus" scoped></style>
