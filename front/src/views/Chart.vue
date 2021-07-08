<template>
  <div>
      <v-container>
            <canvas id="myChart" width="400" height="200"></canvas>
      </v-container>

  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import {fetchBusan, fetchDeajeon, fetchGwang, fetchSoeul} from '../api/index';

export default {
  
    data: function(){
        return{
            w_seoul:[],
            w_busan:[],
            w_gwangju:[],                                              
            w_daejeon:[],
        }
    },
    async mounted(){
            await this.getData();
        console.log(this.w_seoul.main.temp);
        console.log(this.data);
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['서울', '부산', '광주', '대구'],
                datasets: [{
                    label: '# of Votes',
                    data: [this.w_seoul.main.temp, this.w_busan.main.temp, 
                            this.w_gwangju.main.temp, this.w_daejeon.main.temp],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        console.log(myChart);
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

<style>

</style>