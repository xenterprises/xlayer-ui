// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // Path: assets/css/x-ui.css
    '~/assets/css/x-ui.css'
  ],
  app: {
    head: {
      link: [
        // <link rel="preload" href="Mona-Sans.woff2" as="font" type="font/woff2" crossorigin>
        { rel: "preload", href: "/Mona%20Sans/Mona-Sans.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" }
      ]
    }
  }
})
