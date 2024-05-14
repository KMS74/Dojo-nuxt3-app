<template>
  <div class="card text-center">
    <NuxtImg
      :src="product.image"
      alt="product thumb"
      class="mx-auto"
      width="150"
      height="200"
      sizes="(max-width: 150px) 100vw, 150px"
      :placeholder="[150, 200, 75, 5]"
      loading="lazy"
      fit="fill"
      format="webp"
    />
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
