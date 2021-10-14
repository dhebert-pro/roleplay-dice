import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import appStore from '@/store/store';
import '@/assets/css/main.css';

const app = createApp(App);
app.use(router);
app.use(appStore);
app.mount('#app');
