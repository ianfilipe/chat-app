import { atom } from 'recoil'
import { getChats, getMessageById } from './selectors'

export const chatState = atom({
  key: 'chatState',
  default: getMessageById,
})

export const chatList = atom({
  key: 'chatList',
  default: getChats,
})

export const currentChatId = atom({
  key: 'currentChatId',
  default: 404,
})
