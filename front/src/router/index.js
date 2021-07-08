import Vue from 'vue';
import VueRouter from 'vue-router';
import Weather from '../views/Weather.vue'
import WeatherTest from '../views/WeatherTest'
import Recommend from "@/views/Recommend";
import Create from "@/views/Create";
import Check from "@/views/Check";
import Chart from "@/views/Chart";


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

    {
        path:'/weathertest',
        name:'WeatherTest',
        component:WeatherTest
    },
    {
        path:'/chart',
        name:'Chart',
        component:Chart
    },

];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;