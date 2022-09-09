<template>
  <div class="patientsCss flex flex-col w-full pb-8 "> 
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
          <span class=" text-stone-700 ">Gestion de Caisse</span>  
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
          <div  @click="recapitulatif=true"  class=" group flex flex-col cursor-pointer" title="Ajouter une nouvelle patients ">
            <div class=" group-hover:scale-125 flex flex-row justify-center">
              <div class="flex flex-row rounded-full border border-stone-700">
                 <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-600 hover:text-indigo-700" d="M18 6v11h4V6M2 17h4V6H2m5 13h10V4H7v15z" /></svg>
              </div>
            </div>
            <span class=" font-medium text-stone-500 hover:text-indigo-700">Récap</span>
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
    <!-- formulaire Popup --> 
    <div v-if="formulaire==true"  class="  justify-center items-center absolute blures w-full flex h-screen top-0 left-0"> 
     <div class=" flex flex-col py-5 bg-white my-shadow rounded-xl"> 
         <div class=" w-full flex text-center">
          <span  class=" text-4xl text-gray-500 w-full text-center pb-5"> Préparation Encaissements </span>
          <div class=" ">
            <div @click="formulaire=false" class=" group absolute -ml-9  transform cursor-pointer duration-200">
              <svg class=" group-hover:scale-150 duration-150 w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div>
          </div>
         </div>
         <div class="flex-row flex px-12 py-3">
          <div class=" flex flex-col px-7">
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">N° Mouvement</span>
              <input type="text" placeholder="12456..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Nom et Prénom</span>
              <input type="text" placeholder="Rakoto..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Date et Heure d'encaissement</span>
              <div class=" flex flex-row"> 
                <input type="date" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-36">
                <input type="time" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-24 ml-3">
              </div>
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Méthode d'encaissement</span>
              <input type="text" placeholder="Prise en charge" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
          </div> 
          <div class=" flex flex-col px-7">
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Tarif</span>
              <input type="number" placeholder="Normal" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Montant Total</span>
              <input type="number" placeholder="00.000 MGA" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Matricule du Patient</span>
              <input type="number" placeholder="12456..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Département</span>
              <input type="text" placeholder="Caissier..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
          </div>
         </div>
         <div class=" w-full flex flex-center px-20">
          <button class=" bg-stone-400 w-full py-2 rounded-xl text-white font-semibold">Enregistrer</button>
         </div>
     </div> 
    </div>
    <!-- tableau de recapitulatif --> 
    <div v-if="recapitulatif==true" @click="recapitulatif=false"  class="  justify-center items-center absolute blures w-full flex h-screen top-0 left-0"> 
     <div class=" flex flex-col py-5 bg-white my-shadow rounded-xl"> 
          
      <table class=" w-full  rounded-lg "> 
        <tr class=" bg-stone-100   border-stone-200">
          <th class="  px-5 py-3 text-start" >RECAPITULATIF</th>
          <th class="  px-5 py-3 text-start" >AVANCES PERCUES</th>
        </tr>
        <tr class=" bg-stone-100   border-stone-200">
          <th class="  px-5 py-3 text-start" >Designation des actes</th>
          <th class="  px-5 py-3 text-start" >Montant</th>
        </tr>
        <tbody> 
          <tr v-for="item,j in arrayRecapitulatif" :key="j" class=" group border-t border-stone-200  ">
            <td class=" px-5 bg-white py-1 text-stone-600"  v-for="i in 2" :key="i" v-text="i-1==1?item[i-1]+' MGA':item[i-1]"> </td> 
          </tr>
        </tbody>
      </table> 
         <div class=" w-full flex flex-center px-5">
          <div class="  w-full py-2 bg-green-400 flex justify-center rounded-xl text-white font-semibold">
            <span class=" text-white">Iprimer</span>
            <svg class=" ml-4 w-6" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M18 3H6v4h12m1 5a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m-3 7H8v-5h8m3-6H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3z" /></svg>
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
    formulaire:false,
    recapitulatif:false,
    urlPatients:'Patients',
    arrayRecapitulatif:[
      [`Consultation`,3000],
      [`Traitement Divers`,3000],
      [`Médicaments & Fournitures`,3000],
      [`Analyse & Labo`,3000],
      [`Frais d'hospitalisation`,3000],
      [`Petite Chirurgie`,3000],
      [`Radiographie`,3000],
      [`Ecographie`,3000],
      [`Chirurgie`,3000],
      [`Accouchement`,3000],
      [`Sérum`,3000],
      [`Fiche`,3000],
      [`Certificat`,3000],
      [`Divers`,3000],
    ]
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

.blures {
  transition: 0.4ms;
  backdrop-filter: blur(3px);
  background: rgba(109, 109, 109, 0.247);
}
.opacites{
  background: rgba(177, 177, 177, 0);
}
.patientsCss{ 
}
</style>