<template>
  <section class="flex my-4 px-4 py-8 border">
    <the-icons icon="infusion" icon-classes="w-10 h-16"></the-icons>
    <div class="pl-4 w-full">
      <h3 class="font-bold uppercase">beza</h3>
      <p class="text-xs pb-2">Description</p>
      <div class="flex justify-between">
        <the-icons
          icon="bean"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="w-auto flex items-center"
          slot-classes="text-xs text-gray-400"
          >40g</the-icons
        >
        <the-icons
          icon="water"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="flex items-center"
          slot-classes="text-xs text-gray-400"
          >500ml</the-icons
        >
        <the-icons
          icon="grind"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="flex items-center"
          slot-classes="text-xs text-gray-400"
          >Coarse</the-icons
        >
        <the-icons
          icon="time"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="flex items-center"
          slot-classes="text-xs text-gray-400"
          >12 timer</the-icons
        >
      </div>
    </div>
  </section>
</template>

<script>
import TheIcons from "./TheIcons.vue";

export default {
  components: {
    TheIcons,
  },
};
</script>