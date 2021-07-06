import Vue from 'vue';
import VueRouter from 'vue-router';
import Weather from '../views/Weather.vue'
import Recommend from "@/views/Recommend";
import Create from "@/views/Create";
import Check from "@/views/Check";

Vue.use(VueRouter);

const routes =[
    {
        path:'/',
        name:'Weather',
        component:Weather
    },
    {
        path:'/recommend',
        name:'Recommend',
        component:Recommend
    },
    {
        path:'/create',
        name:'Create',
        component:Create
    },
    {
        path:'/check',
        name:'Check',
        component:Check
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;