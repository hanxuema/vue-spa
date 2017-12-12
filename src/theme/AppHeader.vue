<template>
    <nav class="navbar has-shadow">
            <div class="container">
                <router-link to="/" exact>
                 <img src="http://bit.ly/vue-img" alt="vue SPA" />
                </router-link>
                <router-link class="navbar-item is-tab" to="/category/front-end" exact>
                    Home
                </router-link>
           
                <router-link class="navbar-item is-tab" to="/login">
                    Login
                </router-link>
            </div>
        </nav>
</template>
