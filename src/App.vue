<template>
  <router-view></router-view>
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
