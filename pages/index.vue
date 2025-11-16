<script setup lang="ts">
import WelcomePagePresenter from "~/presenters/WelcomePagePresenter.vue"

// SEO metadata
useSeoMeta({
  title: 'Whokipedia - The Ultimate Celebrity Guessing Game',
  description: 'Test your knowledge of celebrities in Whokipedia! Guess the celebrity behind the blur with as few hints as possible.',
  ogTitle: 'Whokipedia - The Ultimate Celebrity Guessing Game',
  ogDescription: 'Test your knowledge of the who\'s who in Whokipedia, where each clue leads you closer to uncovering the celebrity behind the blur!',
  ogImage: 'https://whokipedia.com/img/logo-filled.png',
  ogUrl: 'https://whokipedia.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Whokipedia - The Ultimate Celebrity Guessing Game',
  twitterDescription: 'Test your knowledge of the who\'s who in Whokipedia!',
  twitterImage: 'https://whokipedia.com/img/logo-filled.png',
})
</script>

<template>
  <div ><WelcomePagePresenter/></div>
</template>
