<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto flex justify-between p-4">
      <NuxtLink class="font-bold" to="/">Nuxt DiJo</NuxtLink>
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink class="btn" to="/products">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto">
    <!-- output page content  -->
    <slot />
  </main>
</template>

<style scoped>
.router-link-exact-active {
  color: #03533E;
}
</style>
