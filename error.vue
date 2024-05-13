<template>
  <div class="card mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl font-bold">Ooops!</p>
    <p class="mt-7">{{ error.message }}</p>

    <button @click="handleClearError" class="btn mt-7">Go Home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<style scoped></style>
