export default defineNuxtConfig({
  modules: [
      '@nuxt/ui',
      'nuxt-vuefire',
      '@pinia/nuxt',
  ],

  ui: {
      icons: ['simple-icons', 'eos-icons', 'material-symbols']
  },

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
          viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      }
  },

  compatibilityDate: "2025-03-11"
})