import axios from 'axios'

class Api {
  async getMessageById(id: any) {
    const response = await axios.get(`http://localhost:3000/messages/${id}`)
    const messages = response.data.messages
    return messages
  }
}

export default new Api()
