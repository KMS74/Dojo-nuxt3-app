<template>
  <Head>
    <Title>
      Nuxt Dojo |
      {{ product.title }}
    </Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <ProductDetails :product="product" />
</template>

<script setup>
definePageMeta({
  layout: "products",
  title: "Product Details Page",
  description: "This is the product details page description",
});

const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, {
  key: id, // cache key
});
// if product is not found, throw an error
if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
