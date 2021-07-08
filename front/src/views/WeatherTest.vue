<template>
  <v-container>        
        <!-- <button @click="getData">날씨 api 가져오기</button>      -->
        <v-card>
            <div>서울: {{ this.w_seoul.name }}  |  {{this.w_seoul.main.temp}}</div>
            <div>부산: {{ this.w_busan.name }}  |  {{this.w_busan.main.temp}}</div>
            <div>광주: {{ this.w_gwangju.name }}  |  {{this.w_gwangju.main.temp}}</div>
            <div>대전: {{ this.w_daejeon.name }}  |  {{this.w_daejeon.main.temp}}</div>
        </v-card>
            <!-- <canvas class="statistics-charts-line" ref="lineChart" width="500" height="400"></canvas> -->

            <!-- <div>{{ this.weathers.name }}</div> -->
            <!-- country -->
            <!-- <div>{{ this.weathers.sys.country }}</div> -->
            <!-- 최고온도 -->
            <!-- <div>{{ this.weathers.main.temp_max }}</div> -->
            <!-- 최저온도 -->
            <!-- <div>{{ this.weathers.main.temp_min }}</div> -->
            <!-- 온도 -->
            <!-- <div>{{ this.weathers.main.temp }}</div> -->
            <!-- 체감 온도 -->
            <!-- <div>{{ this.weathers.main.feels_like }}</div> -->
  </v-container>
  <!--
        <div class="temp">{{ Math.round(weather.main.temp) }}℃</div>
        <div class="weather">{{ weather.weather[0].main }}</div>
  -->

</template>

<script>
import {fetchBusan, fetchDeajeon, fetchGwang, fetchSoeul} from '../api/index';


export default {   
    created(){
        this.getData()
    },

    data: function(){
        return{
            w_seoul:[],
            w_busan:[],
            w_gwangju:[],
            w_daejeon:[]
        }
    },
    
    methods:{
        async getData(){
            const seoul = await fetchSoeul();
            const busan = await fetchBusan();
            const gwangju = await fetchGwang();
            const daejeon = await fetchDeajeon();
            
            // const fetData = await fetchAll();
            this.w_seoul = seoul.data;
            this.w_busan = busan.data;
            this.w_gwangju = gwangju.data;
            this.w_daejeon = daejeon.data;
        }
    },
}
</script>