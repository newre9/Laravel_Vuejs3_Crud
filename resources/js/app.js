require('./bootstrap');



import { createApp } from 'vue';

import router from './router/index.js'
import Productsindex from './components/products/Productsindex.vue';

createApp({
    components: {
        Productsindex,
      
    }
}).use(router).mount('#app')






