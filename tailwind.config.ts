/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './views/**/*.vue',
    './presenters/**/*.vue',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-filled': "url('/img/logo-filled.png')",
      },
    },
  },
  plugins: [],
}

