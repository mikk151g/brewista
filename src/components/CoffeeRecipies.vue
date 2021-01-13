<template>
  <the-icons
    @goBack="goBack"
    icon="arrowBack"
    icon-classes="w-7 h-7 mr-4"
    wrapper-classes="flex mx-4 my-8"
    ><h1 class="font-semibold text-lg">How do you want to brew</h1></the-icons
  >
  <main class="m-4">
    <section class="mb-16">
      <h2>Favorite Recipe</h2>
      <ul v-if="favorites.length > 0">
        <li v-for="favorite in favorites" :key="favorite.id">
          <brew-card v-bind="favorite"></brew-card>
        </li>
      </ul>
    </section>
    <section class="my-8">
      <h2>Try a new recipe</h2>
      <ul v-if="newRecipies.length > 0">
        <li v-for="recipe in newRecipies" :key="recipe.id">
          <brew-card v-bind="recipe"></brew-card>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import TheIcons from "./TheIcons.vue";
import BrewCard from "./BrewCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheIcons,
    BrewCard,
  },
  computed: {
    ...mapGetters(["favorites", "newRecipies"]),
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
h2 {
  @apply text-gray-400 uppercase;
}
</style>