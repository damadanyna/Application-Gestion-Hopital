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
    <!-- tableau -->
    <div class=" mt-11 my-shadow rounded-lg bg-white py-2" >
      <div class=" px-4 py-4">
        <span class=" text-stone-600 text-2xl font-bold">Gestion des Patients > Patients</span>
      </div>
      <table class=" w-full  rounded-lg "> 
        <tr class=" bg-stone-100   border-stone-200">
          <th class="  px-5 py-3 text-start" v-for="i in 4" :key="i">title {{i}}</th>
        </tr>
        <tbody> 
          <tr v-for="j in 12" :key="j" class=" border-t border-stone-200  ">
            <td class=" px-5 bg-white py-1 text-stone-600"  v-for="i in 4" :key="i">val{{i +' de' +j}}</td>
          </tr>
        </tbody>
      </table> 
      <div class=" px-4 py-1 justify-between flex border-t border-stone-300 pt-3"> 
        <div class=" flex flex-row">
          <div v-for="i in 4" :key="i" @click="indexPage=i" :class="i==indexPage?' border-indigo-700 bg-indigo-400 ':' border-stone-400'" class=" transform hover:scale-125  font-bold rounded-lg cursor-pointer border px-3 mx-1">
            <span :class="i==indexPage?' text-white':'text-stone-400'" class=" " v-text="i"></span>
          </div>
          <span>...</span>
          <div   @click="indexPage=i"  class="border-stone-400 font-bold rounded-lg border px-3 mx-1  transform hover:scale-125 cursor-pointer"> 
              <svg   v-on:click="wrapMenu = true" viewBox="0 0 24 24" class="w-6" >
                <path  class="fill-current text-stone-600"  d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
              </svg> 
          </div>
        </div> 
        <div class=" flex flex-row">
          <div class=" hover:border-indigo-700 hover:bg-indigo-400 border-stone-400 transform hover:scale-125   rounded-lg cursor-pointer border px-3 mx-1">
            <span   class=" hover:text-white text-stone-400 "  >Ajouter</span>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    indexPage:1,
  }
}
}
</script>

<style>

</style>