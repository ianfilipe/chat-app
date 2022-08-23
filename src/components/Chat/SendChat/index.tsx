import { useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { ws } from '../../../api/ws'
import { currentChatId } from '../../../state/atom'
import Button from '../../Button'
import Input from '../../Input'
const StyledSendChat = styled.div`
  display: flex;
  gap: 8px;
`

function SendChat() {
  const [value, setValue] = useState('')
  const currentChat = useRecoilState(currentChatId)

  const sendChat = () => {
    try {
      const newChat = {
        chatId: currentChat.at(0),
        userName: 'Teste',
        userMessage: value,
      }
      if (newChat.userMessage) {
        ws.send(JSON.stringify(newChat))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledSendChat>
      <Input
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Envie sua mensagem"
      />
      <Button
        onClick={() => {
          sendChat()
        }}
      >
        Chat
      </Button>
    </StyledSendChat>
  )
}

export default SendChat
