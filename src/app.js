import vue from 'vue';
import AppLayout from './theme/Layout.vue';

console.log(AppLayout)

const app = new vue({
     render: h => h(AppLayout)
    //...AppLayout
});

export { app }