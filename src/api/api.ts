import axios from 'axios'

class Api {
  async getMessageById(id: any) {
    try {
      const response = await axios.get(`http://localhost:3000/messages/${id}`)
      const messages = response.data.messages
      return messages
    } catch (error) {
      console.log(error)
    }
  }

  async getChats() {
    const response = await axios.get(`http://localhost:3000/chats`)
    const chats = response.data
    return chats
  }
}

export default new Api()
