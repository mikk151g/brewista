<template>
  <the-icons
    @goBack="goBack"
    icon="arrowBack"
    icon-classes="w-7 h-7 mr-4"
    wrapper-classes="flex mx-4 my-8"
    ><h1 class="font-semibold text-lg">Pick your coffee</h1></the-icons
  >

  <main>
    <ul v-if="coffeeTypes.length > 0">
      <li v-for="type in coffeeTypes" :key="type.id">
        <coffee-card v-bind="type"></coffee-card>
      </li>
    </ul>
  </main>
</template>

<script>
import TheIcons from "./TheIcons.vue";
import CoffeeCard from "./CoffeeCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheIcons,
    CoffeeCard,
  },
  computed: {
    ...mapGetters(["coffeeTypes"]),
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>