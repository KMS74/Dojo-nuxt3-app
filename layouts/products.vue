<template>
  <header class="shadow-sm bg-white p-4">
    <nav class="container mx-auto">
      <NuxtLink class="font-bold" to="/products">Nuxt DiJo Merch</NuxtLink>
    </nav>
  </header>

  <main class="container mx-auto p-4">
    <slot />
  </main>
  <footer class="container mx-auto flex justify-between border-t-2 p-4">
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
