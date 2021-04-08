import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import InitialPage from "@/stages/InitialPage";
import ScoringPage from "@/stages/ScoringPage";

Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Ibis - Genetic Circuit Scoring Algorithm',
            component: InitialPage,
        },
        {
            path: '/scoring',
            name: 'Ibis - Genetic Circuit Scoring Algorithm',
            component: ScoringPage,
        },
    ]
})

new Vue({
    el: '#app',
    vuetify,
    render: h => h(App),
    router,
}).$mount('#app')
