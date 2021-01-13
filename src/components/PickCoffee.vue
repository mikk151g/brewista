<template>
  <the-icons
    @goBack="goBack"
    role="link"
    icon="arrowBack"
    icon-classes="w-7 h-7 mr-4"
    wrapper-classes="flex mx-4 my-8"
    ><h1 class="font-semibold text-lg">Pick your coffee</h1></the-icons
  >

  <main>
    <coffee-card></coffee-card>
  </main>
</template>

<script>
import TheIcons from "./TheIcons.vue";
import CoffeeCard from "./CoffeeCard.vue";

export default {
  components: {
    TheIcons,
    CoffeeCard,
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>