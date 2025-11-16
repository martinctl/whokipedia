export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-vuefire', '@pinia/nuxt', "@nuxtjs/seo"],

  vuefire: {
      auth: {
          enabled: true,
          sessionCookie: true
      },
      config: {
          apiKey: "AIzaSyA7geOEExyTu28Kg4M7Y9hNjHQn8ktouI0",
          authDomain: "whokipedia-challenge.firebaseapp.com",
          projectId: "whokipedia-challenge",
          databaseURL: "https://whokipedia-challenge-default-rtdb.europe-west1.firebasedatabase.app",
          storageBucket: "whokipedia-challenge.appspot.com",
          messagingSenderId: "797330362930",
          appId: "1:797330362930:web:ab6d37fbfa9273573d222b"
      }
  },

  app: {
      head: {
          viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0"
      }
  },

  // SEO Configuration
  site: {
    url: 'https://whokipedia.com',
    name: 'Whokipedia',
    description: 'Test your knowledge of the who\'s who in Whokipedia, where each clue leads you closer to uncovering the celebrity behind the blur! A guessing game inspired by Wikipedia and Guess Who.',
    defaultLocale: 'en',
  },

  compatibilityDate: "2025-03-11"
})
