<template>
  <div class="flex flex-col h-screen">
    <div
      :class="wrapMenu ? 'w-56 px-6' : 'w-10 px-2'"
      class="flex bg-stone-600 flex-col h-full rounded-r-2xl"
    >
      <div
        class="flex w-full justify-end mt"
        :class="wrapMenu ? '  py-4' : 'mt-4'"
      >
        <svg
          v-if="wrapMenu"
          viewBox="0 0 24 24"
          v-on:click="wrapMenu = false"
          class="w-6 transform hover:scale-150 cursor-pointer"
        >
          <path
            class="fill-current text-white"
            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          />
        </svg>
        <svg
          v-else
          v-on:click="wrapMenu = true"
          viewBox="0 0 24 24"
          class="w-6 transform hover:scale-150 cursor-pointer"
        >
          <path
            class="fill-current text-white"
            d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z"
          />
        </svg>
      </div>
      <div class="flex flex-col py-8">
        <router-link
          v-for="liste in listItem"
          :class="wrapMenu ? ' m-1 py-1' : 'my-3 py-1'"
          :key="liste"
          :to="liste.url"
        >
          <div class="flex flex-row">
            <div v-html="liste.ico"></div>
            <span
              v-if="wrapMenu"
              v-text="liste.text"
              class="text-white ml-3"
            ></span>
          </div>
        </router-link>
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
          text: `Accueil`,
          url: `/views/accueil`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24">
          <path
            class="fill-current text-white"
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
          />
        </svg>`,
        },
        {
          text: `Utilisateur`,
          url: `/views/accueil`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24"> 
          <path
                class="fill-current text-white"
            d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z"
          /> 
        </svg>`,
        },
        {
          text: `Accueil`,
          url: `/views/accueil`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24">
          <path
            class="fill-current text-white"
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
          />
        </svg>`,
        },
        {
          text: `Accueil`,
          url: `/views/accueil`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24">
          <path
            class="fill-current text-white"
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
          />
        </svg>`,
        },
        {
          text: `Accueil`,
          url: `/views/accueil`,
          ico: `
        <svg class=" w-6 transform hover:scale-150 cursor-pointer" viewBox="0 0 24 24"> 
          <path
                class="fill-current text-white"
            d="M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
          />
        </svg>`,
        },
      ],
      wrapMenu: false,
    };
  },
  name: "IndexPage",
};
</script>
