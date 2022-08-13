import { atom } from 'recoil'
import { getMessage } from './selectors'

export const chatState = atom({
  key: 'chatState',
  default: getMessage,
})
