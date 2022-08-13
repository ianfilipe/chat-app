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
      <ChatList />
      <Chat />
    </RecoilRoot>
  )
}

export default App
