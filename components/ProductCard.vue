<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />
    <div class="card__content">
      <p class="font-bold text-gray-500 truncate">{{ product.title }}</p>
      <NuxtLink class="btn" :to="`/products/${product.id}`">
        View Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-width: 70%;
  max-height: 120px;
  margin: 0 auto;
}
</style>
