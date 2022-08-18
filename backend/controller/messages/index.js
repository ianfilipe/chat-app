import fs from 'fs'

class Messages {
  getMessagesById(req, res) {
    const id = req.params.id
    const data = JSON.parse(fs.readFileSync('db.json'))
    // const dataKeys = Object.keys(data)
    return res.status(200).send(data[id])
  }
}

export default new Messages()
