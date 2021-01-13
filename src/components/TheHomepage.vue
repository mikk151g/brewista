<template>
  <div class="flex justify-between mx-4 my-8">
    <h1 class="text-gray-500 text-xl">Brewista</h1>
    <the-icons icon="user" icon-classes="text-gray-500 w-7 h-7"></the-icons>
  </div>

  <main class="mx-4">
    <h2 class="uppercase text-gray-400">Latest brews</h2>
    <ul v-if="latestBrews.length > 0">
      <li v-for="brew in latestBrews" :key="brew.id">
        <brew-card v-bind="brew" :uppercase="true"></brew-card>
      </li>
    </ul>
    <router-link to="/pickCoffee"
      ><button class="brew-button">Brew a cup</button>
    </router-link>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import TheIcons from "./TheIcons.vue";
import BrewCard from "./BrewCard.vue";

export default {
  components: {
    TheIcons,
    BrewCard,
  },
  computed: {
    ...mapGetters(["latestBrews"]),
  },
};
</script>

<style scoped>
.brew-button {
  background: yellow;
  @apply uppercase rounded-full font-bold px-14 py-6 fixed
    left-1/2 transform -translate-x-1/2 bottom-5;
}
</style>