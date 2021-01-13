<template>
  <section :class="`flex my-4 px-4 py-8 ${border ? 'border' : 'border-none'}`">
    <the-icons :icon="icon" :icon-classes="iconClasses"></the-icons>
    <div class="pl-4 w-full">
      <h3 :class="`font-bold ${uppercase ? 'uppercase' : ''}`">{{ title }}</h3>
      <p class="text-xs pb-2 text-gray-500">{{ by }}</p>
      <div class="flex justify-between">
        <the-icons
          icon="bean"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="w-auto flex items-center"
          slot-classes="text-xs text-gray-400"
          >{{ beans }}</the-icons
        >
        <the-icons
          icon="water"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="flex items-center"
          slot-classes="text-xs text-gray-400"
          >{{ water }}</the-icons
        >
        <the-icons
          icon="grind"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="flex items-center"
          slot-classes="text-xs text-gray-400"
          >{{ grind }}</the-icons
        >
        <the-icons
          icon="time"
          icon-classes="w-3 h-3 mr-1 text-gray-400"
          wrapper-classes="flex items-center"
          slot-classes="text-xs text-gray-400"
          >{{ time }}</the-icons
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
  props: {
    border: {
      default: true,
      required: false,
    },
    uppercase: {
      required: false,
    },
    iconClasses: {
      default: "w-10 h-16",
      required: false,
    },
    icon: String,
    title: String,
    by: {
      required: false,
    },
    beans: String,
    water: String,
    grind: String,
    time: String,
  },
};
</script>