<script setup lang="ts">

import { displayErrorNotification } from "~/utilities/Utils"
import ResetPasswordPresenter from "~/presenters/ResetPasswordPresenter.vue";

// SEO metadata
useSeoMeta({
  title: 'Reset Password - Whokipedia',
  description: 'Reset your password for your Whokipedia account. Enter a new secure password to regain access to your account.',
  ogTitle: 'Reset Password - Whokipedia',
  ogDescription: 'Reset your password for your Whokipedia account.',
  ogImage: 'https://whokipedia.com/img/logo-filled.png',
  ogUrl: 'https://whokipedia.com/reset-password',
  robots: 'noindex, nofollow', // Cette page ne doit pas être indexée car elle contient des liens privés
})

// Constants
const route = useRoute()
const toast = useToast()

// Refs
const mode = ref(route.query.mode as string)
const actionCode = ref(route.query.oobCode as string)

onMounted(async () => {
  if (mode.value !== 'resetPassword') {
    displayErrorNotification(toast, 'Invalid request.')
    await useRouter().push('/')
  }
})

</script>

<template>
  <ResetPasswordPresenter :actionCode="actionCode"/>
</template>
