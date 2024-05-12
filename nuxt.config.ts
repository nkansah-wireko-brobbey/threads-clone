// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules:[
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],
  runtimeConfig:{
    public: {
      bucketUrl: process.env.BUCKET_URL
    }
  }
})
