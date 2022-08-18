import { atom } from 'recoil'
import { getMessageById } from './selectors'

export const chatState = atom({
  key: 'chatState',
  default: getMessageById,
})

export const currentChatId = atom({
  key: 'currentChatId',
  default: 404,
})
