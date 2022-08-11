import fs from "fs";

class Messages {
  getMessages(req, res) {
    const data = fs.readFileSync("db.json");
    return res.status(200).send(data);
  }
}

export default new Messages();
