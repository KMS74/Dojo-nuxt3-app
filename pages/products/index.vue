<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
// definePageMeta is a function that allows you to define the meta tags for the current page
definePageMeta({
  layout: "products", // specify the layout to use
});

// defineHead is a function that allows you to define the head tags for the current page
useHead({
  title: "Nuxt Dojo | Merch",
  description: "This is the products page description",
});
// fetch products data
const { data: products } = await useFetch("https://fakestoreapi.com/products", {
  key: "products", // cache <meta name="keywords" content="your tags" />
});
</script>

<style scoped></style>
