<template>
  <div class="flex flex-col h-screen"> 
    <div :class="wrapMenu ? 'w-56  ' : 'w-10  '" class="flex flex-col h-full rounded-r-2xl my-shadow bg-white"  >
      <!-- header-bar -->
      <div  class="flex w-full   justify-end " :class="wrapMenu ? '  py-4' : 'mt-4'" > 
        <div class=" px-2">
          <svg  v-if="wrapMenu" viewBox="0 0 24 24" v-on:click="wrapMenu = false"  class=" w-6 transform hover:scale-150 cursor-pointer" >
            <path  class="fill-current text-stone-600" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
          <svg v-else  v-on:click="wrapMenu = true" viewBox="0 0 24 24" class="w-6 transform hover:scale-150 cursor-pointer" >
            <path  class="fill-current text-stone-600"  d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
          </svg>
        </div>
      </div>
      <!-- logo -->
      <div v-if="wrapMenu" class="flex flex-between px-2">
        <div class=" w-14">
          <span>Logo</span>
        </div>
        <div class=" flex flex-col">
          <span class=" text-xs font-medium">Application Gestion Hopital</span>
          <span class=" mt-2 text-xs font-bold text-center">OPITAL LUTHERIENNE ANTSIRABE</span>
       </div> 
      </div>
      <div class="  pt-14"> 
        <!-- title -->
        <div v-if="wrapMenu" ><span class=" delay-100  text-stone-400 text-center px-6" >MEDICINE</span></div>
        <!-- liste -->
        <div :class="wrapMenu ? '  px-6' : ' px-2'" class="flex flex-col ">
          <router-link v-for="liste in listItem" :class="wrapMenu ? ' m-1 py-1' : 'my-3 py-1'" :key="liste" :to="liste.url" >
            <div class="flex flex-row">
              <div v-html="liste.ico"></div>
              <span  v-if="wrapMenu"  v-text="liste.text"  class=" black-t ml-3" ></span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItem: [
        {
          text: `Tableau de Bord`,
          url: `/accueil`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24">
          
          <path 
             class="fill-current text-stone-600" d="M17 17h-2v-4h2m-4 4h-2V7h2M9 17H7v-7h2m10-7H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        </svg>`,
        },
        {
          text: `Patients`,
          url: `/patients`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24"> 
          <path
          class="fill-current text-stone-600"
            d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z"
          />  
        </svg>`,
        },
        {
          text: `Stocks`,
          url: `/stocks`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24">
         
          <path 
            class="fill-current text-stone-600" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        </svg>`,
        },
        {
          text: `Caisse`,
          url: `/caisse`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24">
          <path
            class="fill-current text-stone-600"
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
          />
        </svg>`,
        },
        {
          text: `Utilisateur`,
          url: `/utilisateur`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24"> 
          <path
                class="fill-current text-stone-600"
            d="M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
          />
        </svg>`,
        },
      ],
      wrapMenu: false,
    };
  },
  mounted(){
    
  },
  name: "IndexPage",
};
</script>
<style>
</style>
