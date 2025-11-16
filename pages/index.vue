<script setup lang="ts">
import WelcomePagePresenter from "~/presenters/WelcomePagePresenter.vue"

// SEO metadata
useSeoMeta({
  title: 'Whokipedia - Daily Celebrity Guessing Game',
  description: 'Play Whokipedia, a free daily celebrity guessing game! Guess famous people from Wikipedia-style clues. New puzzle every day with leaderboard.',
  keywords: 'daily game, daily games, celebrity guessing game, daily puzzle, daily puzzles, guess who game, daily challenge, wikipedia game, celebrity quiz, famous person game, daily word game, free daily game',
  ogTitle: 'Whokipedia - Daily Celebrity Guessing Game',
  ogDescription: 'Play Whokipedia, a free daily celebrity guessing game! Guess famous people from Wikipedia-style clues. New puzzle every day.',
  ogImage: 'https://whokipedia.com/img/logo-filled.png',
  ogUrl: 'https://whokipedia.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Whokipedia - Daily Celebrity Guessing Game',
  twitterDescription: 'A free daily celebrity guessing game! Guess famous people from Wikipedia-style clues. New puzzle every day.',
  twitterImage: 'https://whokipedia.com/img/logo-filled.png',
})
</script>

<template>
  <div ><WelcomePagePresenter/></div>
</template>
