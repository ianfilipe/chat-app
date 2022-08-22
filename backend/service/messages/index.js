import fs from 'fs'

class Messages {
  saveMessage(msg) {
    const id = JSON.parse(msg).chatId
    let data = fs.readFileSync('db.json')
    let json = JSON.parse(data)
    // console.log(json[id])
    json[id].messages.push(JSON.parse(msg.toString()))
    fs.writeFileSync('db.json', JSON.stringify(json))
  }
}

export default new Messages()
