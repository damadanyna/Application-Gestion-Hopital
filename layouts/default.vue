<template>
  <div class="flex flex-row  bg-stone-100 ">
    <SideBareMenu></SideBareMenu>
    <Nuxt  :detail="data" class=" w-full px-7 pt-4 h-screen max-h-screen overflow-x-hidden   overflow-y-auto" />
  </div>
</template>
<script>
export default {
  props:{data:'dany'},
  layout: "blog",
  // OR
  layout(context) {
    return "blog";
  },
};
</script>
