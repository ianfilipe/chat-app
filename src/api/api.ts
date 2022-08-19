import axios from 'axios'

class Api {
  async getMessageById(id: any) {
    const response = await axios.get(`http://localhost:3000/messages/${id}`)
    const messages = response.data.messages
    return messages
  }

  async getChats() {
    const response = await axios.get(`http://localhost:3000/chats`)
    const chats = response.data
    console.log(chats)
    return chats
  }
}

export default new Api()
