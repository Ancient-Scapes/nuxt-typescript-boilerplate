import { Plugin } from '@nuxt/types'

export interface Messages {
  top: string
}

const messages: Messages = {
  top: 'This is Top page.'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plugin: Plugin = (context, inject) => inject('messages', messages)

export default plugin
