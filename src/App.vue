<template>
  <the-homepage></the-homepage>
  <pick-coffee></pick-coffee>
  <coffee-recipies></coffee-recipies>
</template>

<script>
import TheHomepage from "./components/TheHomepage.vue";
import PickCoffee from "./components/PickCoffee.vue";
import CoffeeRecipies from "./components/CoffeeRecipies.vue";

export default {
  components: {
    TheHomepage,
    PickCoffee,
    CoffeeRecipies,
  },
};
</script>
