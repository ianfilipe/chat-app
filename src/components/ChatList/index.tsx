import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { IChat } from '../../interfaces/IChat'
import { chatState, currentChatId } from '../../state/atom'

const StyledChatList = styled.div`
  width: 280px;
  background: var(--color-background-sidebar);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 48px 24px;
  overflow-y: scroll;
`

interface Props {
  active?: boolean
}

const ChatName = styled.div<Props>`
  color: ${props =>
    props.active ? 'var(--color-white)' : 'var(--color-text-sidebar)'};
  font-weight: ${props => (props.active ? '500' : 'inherit')};
  background: ${props =>
    props.active ? 'var(--color-background-sidebar-active)' : 'inherit'};
  border-radius: 4px;
  padding: 8px;
  :hover {
    color: ${props =>
      props.active ? 'inherit' : 'var(--color-text-sidebar-hover)'};
    background: ${props =>
      props.active
        ? 'var(--color-background-sidebar-active)'
        : 'var(--color-background-sidebar-hover)'};
    cursor: pointer;
  }
`

function ChatList() {
  const setCurrentChatId = useSetRecoilState(currentChatId)

  return (
    <StyledChatList>
      <ChatName active>Chat 1</ChatName>
      <ChatName
        onClick={() => {
          setCurrentChatId(405)
        }}
      >
        Chat 2
      </ChatName>
    </StyledChatList>
  )
}

export default ChatList
