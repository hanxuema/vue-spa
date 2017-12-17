import vue from 'vue'
import vueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

vue.use(vueRouter)

const router = new vueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    routes: [
        { path: "/login", component: Login },
        { path: "/category/:id",name:'category', component:Category }, 
        { path: "/", redirect:'/category/front-end' },
        { path: "*", component:NotFound }
    ]
})

export default router