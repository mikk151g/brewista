<template>
  <brew-card
    :border="false"
    icon-classes="w-7 h-7"
    icon="arrowBack"
    :title="recipe.title"
    :beans="recipe.beans"
    :water="recipe.water"
    :grind="recipe.grind"
    :time="recipe.time"
  ></brew-card>

  <main class="m-4">
    <section>
      <h2 class="uppercase text-xs text-gray-400">Step 1</h2>
      <p class="text-gray-500">Add ground coffee to French Press</p>
    </section>
    <the-icons
      icon="arrowForward"
      icon-classes="w-7 h-7 ml-4"
      wrapper-classes="flex items-center justify-end"
      slot-classes="uppercase font-bold"
      ><template v-slot:beforeIcon>Finish</template></the-icons
    >
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
  props: ["id"],
  computed: {
    ...mapGetters(["favorites, newRecipies"]),
    recipe() {
      const recipies = this.newRecipies;
      const recipe = recipies.find((x) => x.id === this.id);
      return recipe;
    },
  },
};
</script>