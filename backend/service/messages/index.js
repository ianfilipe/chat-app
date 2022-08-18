import fs from 'fs'

class Messages {
  saveMessage(msg) {
    let data = fs.readFileSync('db.json')
    let json = JSON.parse(data)
    json.messages.push(JSON.parse(msg.toString()))
    fs.writeFileSync('db.json', JSON.stringify(json))
  }
}

export default new Messages()
