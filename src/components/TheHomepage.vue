<template>
  <div class="flex justify-between mx-4 my-8">
    <h1 class="text-gray-500 text-xl">Brewista</h1>
    <the-icons icon="user" icon-classes="text-gray-500 w-7 h-7"></the-icons>
  </div>

  <main class="mx-4">
    <h2 class="uppercase text-gray-400">Latest brews</h2>
    <brew-card></brew-card>
    <button class="brew-button">Brew a cup</button>
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
.brew-button {
  background: yellow;
  @apply uppercase rounded-full font-bold px-14 py-6 mx-auto fixed left-1/2 transform -translate-x-1/2 bottom-5;
}
</style>