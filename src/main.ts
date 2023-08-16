import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import uploader from 'vue-simple-uploader'
import 'vue-simple-uploader/dist/style.css'

const app = createApp(App);
app.use(uploader);
app.use(router).use(ElementPlus).mount('#app')