// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        // <link rel="preload" href="Mona-Sans.woff2" as="font" type="font/woff2" crossorigin>
        { rel: "preload", href: "/Mona%20Sans/Mona-Sans.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" }
      ]
    }
  },
    runtimeConfig: {
  public: {
    builderioKey: "07309f97b0e64d2e92ccd1e5c634aab8"
  },
},
})
