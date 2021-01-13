<template>
  <the-homepage></the-homepage>
  <pick-coffee></pick-coffee>
  <coffee-recipies></coffee-recipies>
  <recipe-guide></recipe-guide>
</template>

<script>
import TheHomepage from "./components/TheHomepage.vue";
import PickCoffee from "./components/PickCoffee.vue";
import CoffeeRecipies from "./components/CoffeeRecipies.vue";
import RecipeGuide from "./components/RecipeGuide.vue";

export default {
  components: {
    TheHomepage,
    PickCoffee,
    CoffeeRecipies,
    RecipeGuide,
  },
};
</script>
