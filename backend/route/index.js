import express from 'express'
import chats from '../controller/chats/index.js'
import messages from '../controller/messages/index.js'

const router = express.Router()

router.get('/messages/:id', messages.getMessagesById)

router.get('/chats/', chats.getChats)

// router.post("/message", async (request, response) => {
//   const body = await request.body;
//   json.messages.push(body);
//   fs.writeFileSync("db.json", JSON.stringify(json));
//   // fs.appendFileSync("db.json", JSON.stringify(body));
//   return response.send(body);
// });

export default router
