<template>
  <the-icons
    icon="arrowBack"
    icon-classes="w-7 h-7 mr-4"
    wrapper-classes="flex mx-4 my-8"
    ><h1 class="font-semibold text-lg">How do you want to brew</h1></the-icons
  >
  <main class="m-4">
    <section class="mb-16">
      <h2>Favorite Recipe</h2>
      <brew-card></brew-card>
    </section>
    <section class="my-8">
      <h2>Try a new recipe</h2>
      <brew-card><brew-card>
    </section>
  </main>
</template>

<script>
import TheIcons from "./TheIcons.vue";
import BrewCard from "./BrewCard.vue";
export default {
  components: {
    TheIcons,
    BrewCard,
  },
};
</script>

<style scoped>
h2 {
  @apply text-gray-400 uppercase;
}
</style>