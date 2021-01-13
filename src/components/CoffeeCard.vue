<template>
  <router-link to="/coffeeRecipies">
    <section class="border m-4 pl-8 pr-10 py-8">
      <div class="mb-4">
        <h2 class="uppercase font-bold">{{ title }}</h2>
        <h3 class="text-xs text-gray-500">{{ by }}</h3>
      </div>
      <div class="mb-8">
        <p class="text-gray-500 text-sm">
          {{ description }}
        </p>
      </div>
      <div class="text-xs flex flex-wrap">
        <div class="coffee-info mb-4">
          <h4>Process</h4>
          <p>{{ process }}</p>
        </div>
        <div class="coffee-info mb-4">
          <h4>Roast profile</h4>
          <p>{{ roastProfile }}</p>
        </div>
        <div class="coffee-info">
          <h4>Varieties</h4>
          <p>{{ varieties }}</p>
        </div>
        <div class="coffee-info">
          <h4>Country</h4>
          <p>{{ country }}</p>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  props: [
    "title",
    "by",
    "description",
    "process",
    "roastProfile",
    "varieties",
    "country",
  ],
};
</script>

<style scoped>
h4 {
  @apply uppercase text-gray-400;
}
.coffee-info {
  width: 50%;
}
</style>