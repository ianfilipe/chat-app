import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { WebSocketServer } from "ws";
import router from "./route/index.js";
import messages from "./service/messages/index.js";

const app = express();

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
    messages.saveMessage(msg);
    sockets.forEach((s) => s.send(msg));
  });
  socket.on("close", () => {
    sockets = sockets.filter((s) => s !== socket);
  });
});

console.log("Running on port 8080", sockets);
