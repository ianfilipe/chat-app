import React from 'react'
import { RecoilRoot } from 'recoil'
import { ws } from './api/ws'
import Chat from './components/Chat'
import ChatList from './components/ChatList'

function App() {
  ws.onopen = () => {
    console.log('abrrriuuuuu')
  }

  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ChatList />
        <Chat />
      </React.Suspense>
    </RecoilRoot>
  )
}

export default App
