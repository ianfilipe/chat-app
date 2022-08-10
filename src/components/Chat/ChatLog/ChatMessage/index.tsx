import styled from "styled-components";

const StyledChatMessage = styled.div`
  display: flex;
`;

const UserName = styled.span`
  font-weight: 600;
  color: #00db84;
`;

const UserMessage = styled.span`
  color: var(--color-white);
`;

interface Props {
  userName: string;
  userMessage: string;
}

function ChatMessage({ userName, userMessage }: Props) {
  return (
    <StyledChatMessage>
      <UserName>{userName}</UserName>
      <UserMessage>
        <>: {userMessage}</>
      </UserMessage>
    </StyledChatMessage>
  );
}

export default ChatMessage;
