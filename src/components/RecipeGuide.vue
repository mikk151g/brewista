<template>
  <brew-card
    :border="false"
    icon-classes="w-7 h-7"
    icon="arrowBack"
    title="French Press"
    beans="33g"
    water="500ml"
    grind="Coarse"
    time="4 min"
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

export default {
  components: {
    TheIcons,
    BrewCard,
  },
};
</script>