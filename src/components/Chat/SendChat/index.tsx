import { useState } from 'react'
import styled from 'styled-components'
import { ws } from '../../../api/ws'
import Button from '../../Button'
import Input from '../../Input'
const StyledSendChat = styled.div`
  display: flex;
  gap: 8px;
`

function SendChat() {
  const [value, setValue] = useState('')

  const sendChat = () => {
    const newChat = {
      userName: 'Teste',
      userMessage: value,
    }
    if (newChat.userMessage) {
      ws.send(JSON.stringify(newChat))
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
