import Vue, { createApp } from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'

import App from './App'
import router from './router'
import store from './store/index'
import './styles/index.css'
import 'swiper/dist/css/swiper.css'


/* eslint-disable no-new */
createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
