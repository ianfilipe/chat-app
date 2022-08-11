import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import fs from "fs";
import { WebSocketServer } from "ws";
// import data from "./db.json" assert { type: "json" };

const app = express();
const router = express.Router();

let data = fs.readFileSync("db.json");
let json = JSON.parse(data);

router.get("/messages", (request, response) => {
  return response.status(200).send(data);
});

router.post("/message", async (request, response) => {
  const body = await request.body;
  json.messages.push(body);
  fs.writeFileSync("db.json", JSON.stringify(json));
  // fs.appendFileSync("db.json", JSON.stringify(body));
  return response.send(body);
});

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(3000, () => {
  console.log("Running on port 3000");
});

const server = new WebSocketServer({ port: 8080 });
let sockets = [];
server.on("connection", (socket) => {
  sockets.push(socket);
  socket.on("message", (msg) => {
    console.log(msg);
    sockets.forEach((s) => s.send(msg));
  });
  socket.on("close", () => {
    sockets = sockets.filter((s) => s !== socket);
  });
});

console.log("Running on port 8080", sockets);
