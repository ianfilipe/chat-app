import { selector } from 'recoil'
import api from '../../api/api'
import { currentChatId } from '../atom'

export const getMessageById = selector({
  key: 'getMessageById',
  get: async ({ get }) => {
    return await api.getMessageById(get(currentChatId))
  },
})
