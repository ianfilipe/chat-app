import fs from 'fs'

class Chats {
  getChats(req, res) {
    const data = JSON.parse(fs.readFileSync('db.json'))
    const dataKeys = Object.keys(data)
    return res.status(200).send(dataKeys)
  }
}

export default new Chats()
