import fs from 'fs'

class Chats {
  getChats(req, res) {
    const data = JSON.parse(fs.readFileSync('db.json'))
    const chats = Object.keys(data)
    return res.status(200).send({ chats })
  }
}

export default new Chats()
