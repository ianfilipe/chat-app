import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import data from "./db.json" assert { type: "json" };

const app = express();

const router = express.Router();

router.get("/messages", (request, response) => {
  return response.status(200).send(data);
});

router.post("/message", (request, response) => {
  const body = request.body;
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
