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
      <brew-card
        icon="aeropress"
        title="AeroPress"
        description="Description"
        beans="16g"
        water="230ml"
        grind="Medium"
        time="1 min"
      ></brew-card>
    </section>
    <section class="my-8">
      <h2>Try a new recipe</h2>
      <brew-card
        icon="french"
        title="French Press"
        description="Description"
        beans="33g"
        water="500ml"
        grind="Coarse"
        time="4 min"
      ></brew-card>
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