import { Messages } from '~/plugins/messages'

declare module 'vue/types/vue' {
  interface Vue {
    $messages: Messages
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $messages: Messages
  }
}
