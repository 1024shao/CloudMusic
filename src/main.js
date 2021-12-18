import { createApp } from 'vue'
import App from './App.vue'
// 导入公共样式和swiper样式
import '../src/assets/css/common.css'
import "swiper/css/swiper.css";


import router from '@/router/index.js'
import Carousel from '@/components/Carousel.vue'

const app = createApp(App)
app.use(router)
app.component('Carousel', Carousel)
app.mount('#app')
