import styled from 'styled-components'

const StyledChatMessage = styled.div`
  display: flex;
`

interface UserNameProps {
  color: string
}

// const randomColor = Math.floor(Math.random() * 16777215).toString(16)

const UserName = styled.span<UserNameProps>`
  font-weight: 500;
  color: #${props => props.color};
`

const UserMessage = styled.span`
  color: var(--color-white);
`

interface Props {
  userName: string
  userMessage: string
}

function ChatMessage({ userName, userMessage }: Props) {
  return (
    <StyledChatMessage>
      <UserName color={Math.floor(Math.random() * 16777215).toString(16)}>
        {userName}
      </UserName>
      <UserMessage>
        <>: {userMessage}</>
      </UserMessage>
    </StyledChatMessage>
  )
}

export default ChatMessage
