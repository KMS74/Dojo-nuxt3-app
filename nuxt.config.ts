// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    domains: ["fakestoreapi.com"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "My cool Nuxt3 app",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
