<template>
  <div class="flex flex-col w-full pb-8 "> 
    <!-- head bar -->
    <div class=" flex justify-between"> 
      <div class=" my-shadow flex bg-white rounded-full w-96 px-2 items-center justify-center"> 
          <svg class=" w-9 mb-2"  viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5m-5.91.2L3  " /></svg>
          <input placeholder=" Rechercher" class=" px-3 w-full outline-none" type="text" name="" id="">
      </div>
      <router-link to="/utilisateur" class=" my-shadow flex bg-white rounded-full p-2 ">
        <svg class=" w-7" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
      </router-link>
    </div>
    <!-- Foure box -->
    <div class=" flex w-full justify-between mt-8"> 
      <div v-for="boxItem,i in boxItems" :key="i" :class="i<3?' mr-8':' mr-0'" class="  flex px-6 my-shadow bg-white w-2/5 py-2 rounded-md"> 
        <div class="flex" v-html="boxItem.ico"></div>
        <div class=" ml-2 mt-1 flex flex-col">
          <span v-text="boxItem.text"></span>
          <span class=" text-indigo-600 font-bold " v-text=" boxItem.value"></span>
        </div>
      </div>
    </div>
    <!-- chart view -->
    <div class=" flex w-full justify-center mt-12">  
      <canvas id="suiviPatients" class="  my-shadow rounded-lg bg-white " />
    </div> 
    <!-- chart view2 --> 
    <div class="flex w-full  flex-row   justify-center mt-9">  
      <div class=" flex w-full mr-2 h-auto"> 
        <canvas id="hebdomadaire" class=" my-shadow rounded-lg bg-white " />
      </div>
      <div class=" flex w-full ml-2 h-auto"> 
        <canvas id="journalier" class=" my-shadow rounded-lg bg-white " />
      </div>
    </div>
    <!-- tableau -->
    <div class=" mt-11 my-shadow rounded-lg bg-white py-2" >
      <div class=" px-4 py-4">
        <span class=" text-stone-600 text-2xl font-bold">Nouveau Patient</span>
      </div>
      <table class=" w-full  rounded-lg "> 
        <tr class=" bg-stone-100   border-stone-200">
          <th class="  px-5 py-3 text-start" v-for="i in 4" :key="i">title {{i}}</th>
        </tr>
        <tbody> 
          <tr v-for="j in 7" :key="j" class=" border-t border-stone-200  ">
            <td class=" px-5 bg-white py-1"  v-for="i in 4" :key="i">val{{i}}</td>
          </tr>
        </tbody>
      </table> 
    </div>
  </div>
</template>

<script> 
import Chart from 'chart.js'
export default {
    components: {   },
    data() {
        return {
            boxItems: [
                {
                    text: "Stock",
                    ico: `
          <svg class=" w-16 " viewBox="0 0 24 24"><path class=" fill-current text-indigo-600" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1 1 1 0 0 0 1-1h2a3 3 0 0 1-3 3 3 3 0 0 1-3-3V9h-3v8H8V9H6" /></svg>
          `,
                    value: 214
                },
                {
                    text: "Patients",
                    ico: `
          <svg class=" w-16 " viewBox="0 0 24 24"><path class=" fill-current text-indigo-600" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1 1 1 0 0 0 1-1h2a3 3 0 0 1-3 3 3 3 0 0 1-3-3V9h-3v8H8V9H6" /></svg>
          `,
                    value: 104
                },
                {
                    text: "Hospitalié",
                    ico: `
          <svg class=" w-16 " viewBox="0 0 24 24"><path class=" fill-current text-indigo-600" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1 1 1 0 0 0 1-1h2a3 3 0 0 1-3 3 3 3 0 0 1-3-3V9h-3v8H8V9H6" /></svg>
          `,
                    value: 24
                },
                {
                    text: "Caisse",
                    ico: `
          <svg class=" w-16 " viewBox="0 0 24 24"><path class=" fill-current text-indigo-600" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1 1 1 0 0 0 1-1h2a3 3 0 0 1-3 3 3 3 0 0 1-3-3V9h-3v8H8V9H6" /></svg>
          `,
                    value: 12.146
                }
            ],            
            suiviPatients: {
              type: "line",
              data: {
                labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                datasets: [
                  {
                    label: "Patients 2020",
                    data: [0, 400, 1, 2, 79, 82, 27, 14],
                    backgroundColor: "rgba(54,73,93,.5)",
                    borderColor: "#36495d",
                    borderWidth: 3
                  },
                  {
                    label: "Patients 2021",
                    data: [300.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
                    backgroundColor: "rgba(71, 183,132,.5)",
                    borderColor: "#47b784",
                    borderWidth: 3
                  }
                ]
              },
              options: {
                responsive: true,
                lineTension: 1,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        padding: 25
                      }
                    }
                  ]
                },
                title:{
                  display:true,
                  text:'Suivis des patients',
                  fontSize:26,
                  fontColor:'#6b7280'
                }
              }
            },          
            journalier: {
              type: "line",
              data: {
                labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                datasets: [
                  {
                    label: "100.000.000 MGA",
                    data: [0, 400, 1, 2, 79, 82, 27, 14],
                    backgroundColor: "rgba(54,73,93,.5)",
                    borderColor: "#36495d",
                    borderWidth: 3
                  }, 
                ]
              },
              options: {
                responsive: true,
                lineTension: 1,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        padding: 25
                      }
                    }
                  ]
                },
                title:{
                  display:true,
                  text:'Cette samaine',
                  fontSize:26,
                  fontColor:'#6b7280'
                }
              }
            },         
            hebdomadaire: {
              type: "line",
              data: {
                labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                datasets: [
                  {
                    label: "400.000.000 MGA",
                    data: [300.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
                    backgroundColor: "rgba(71, 183,132,.5)",
                    borderColor: "#47b784",
                    borderWidth: 3
                  }
                ]
              },
              options: {
                responsive: true,
                lineTension: 1,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        padding: 25
                      }
                    }
                  ]
                },
                title:{
                  display:true,
                  text:'Ce mois ci',
                  fontSize:26,
                  fontColor:'#6b7280'
                }
              }
            },
        };
    },
    methods:{
      initChart(id,dataset){ 
        const ctx = document.getElementById(id);
        new Chart(ctx, dataset);
      }
    },
    mounted(){
      this.initChart('suiviPatients',this.suiviPatients)
      this.initChart('hebdomadaire',this.hebdomadaire)
      this.initChart('journalier',this.journalier)
    }
};
</script>
<style scoped> 
</style>
