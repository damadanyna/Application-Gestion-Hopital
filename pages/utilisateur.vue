<template><div class="patientsCss flex flex-col w-full pb-8 "> 
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
  <!-- tableau -->
  <div class=" mt-11 my-shadow rounded-lg bg-white py-2" >
    <div class=" px-4 py-4">
      <div class=" text-stone-700 text-2xl font-bold flex">
        <span class=" text-stone-800 ">Gestion d'Utilisateur</span>  
      </div>
    </div>
    <table class=" w-full  rounded-lg "> 
      <tr class=" bg-stone-100   border-stone-200">
        <th class="  px-5 py-3 text-start" v-for="i in 5" :key="i" :class="i==5?' w-32':''" v-text="i==5?'':'title ' +i"></th>
      </tr>
      <tbody> 
        <tr v-for="j in 10" :key="j" class=" group border-t border-stone-200  ">
          <td class=" px-5 bg-white py-1 text-stone-600"  v-for="i in 4" :key="i">val{{i +' de' +j}}</td>
          <td class=" px-5 bg-white py-1 text-stone-600"   >
            <div class=" group-hover:flex  flex-row hidden">
              <div class=" transform hover:scale-125 pr-1 mr-4 cursor-pointer"  :title="'Supprimer de' +j"> 
                <svg class="w-5" viewBox="0 0 24 24"><path class=" fill-current text-red-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
              </div>
              <div  class=" transform hover:scale-125 pr-1 ml-4 cursor-pointer"  :title="'Editer' +j">
                <svg class=" w-5" viewBox="0 0 24 24"><path class="fill-current text-indigo-700" d="M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-2m10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1-2.1-2.1 1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1 2.1 2.1z" /></svg>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table> 
    <div class=" px-4 py-1 justify-between flex border-t border-stone-300 pt-3"> 
      <div class=" flex flex-col ">
        <div class=" flex flex-row">
          <div v-for="i in 4" :key="i" @click="indexPage=i" :class="i==indexPage?' border-indigo-700 bg-indigo-400 ':' border-stone-800'" class=" transform hover:scale-125  font-bold rounded-lg cursor-pointer border px-3 mx-1">
            <span :class="i==indexPage?' text-white':'text-stone-600'" class=" " v-text="i"></span>
          </div>
          <span>...</span>
          <div   @click="indexPage=i"  class="border-stone-400 font-bold rounded-lg border px-3 mx-1  transform hover:scale-125 cursor-pointer"> 
              <svg   v-on:click="wrapMenu = true" viewBox="0 0 24 24" class="w-6" >
                <path  class="fill-current text-stone-600"  d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
              </svg> 
          </div>
        </div>
      </div> 
      <div class=" flex flex-row">
        <div  @click="formulaire=true" class=" group flex flex-col cursor-pointer" title="Ajouter une nouvelle patients ">
          <div class=" group-hover:scale-125 flex flex-row justify-center">
            <div class="flex flex-row rounded-full border border-stone-700">
              <svg class=" w-5" viewBox="0 0 24 24"><path  class=" fill-current text-stone-600 hover:text-indigo-700"  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
            </div>
          </div>
          <span class=" font-medium text-stone-500 hover:text-indigo-700">Ajouter</span>
        </div> 
        <span class="   bg-stone-400 mx-3" style="width:1px"></span>
        <div class=" group flex flex-col cursor-pointer" title="Séléctionner l'année">
          <div class=" group-hover:scale-125 flex flex-row justify-center">
            <div class="flex flex-col ">
              <div class="flex flex-row justify-between"> 
                <span v-for="i in 5" :key="i" class=" bg-stone-600" style=" height:2px;width:2px" ></span>
              </div>
              <div class="flex flex-row px-1 border-t-4 rounded-b-sm border border-stone-700">
                <span class=" text-xs font-bold text-indigo-700">22</span>
              </div> 
            </div>
          </div>
          <span  class=" font-medium text-stone-500 hover:text-indigo-700">Année</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>0
  export default {
  data(){
    return {
      indexPage:1,
      optionPatients:false,
      formulaire:false, 
    }
  },
  methods:{
    setUrlPatients(val){
      this.urlPatients=val;
    }
  }
  }
  </script>

<style>

</style>