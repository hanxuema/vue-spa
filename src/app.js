import vue from 'vue';
import AppLayout from './theme/Layout.vue';
import router from './router'

console.log(AppLayout)

const app = new vue({
    router, 
    ...AppLayout
});

export { app, router }