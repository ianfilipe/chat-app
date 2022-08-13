import axios from 'axios'

class Api {
  async getMessage() {
    const response = await axios.get('http://localhost:3000/messages')
    const messages = response.data.messages
    return messages
  }
}

export default new Api()
