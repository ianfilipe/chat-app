import { w3cwebsocket } from 'websocket'

const socketUrl = 'ws://localhost:8080'

export const ws = new w3cwebsocket(socketUrl)
