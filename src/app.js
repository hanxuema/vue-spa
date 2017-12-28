import vue from 'vue';
import store from './vuex/index.js'
import AppLayout from './theme/Layout.vue';
import router from './router'

console.log(AppLayout)

const app = new vue({
    router,
    ...AppLayout,
    store
});

export { app, router, store }