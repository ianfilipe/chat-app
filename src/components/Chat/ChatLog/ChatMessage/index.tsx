import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { chatState } from "../../../../state/atom";

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

function ChatMessage() {
  const chat = useRecoilValue(chatState);

  return (
    <StyledChatMessage>
      <UserName>{chat[0].userName}</UserName>
      <UserMessage>
        <>: {chat[0].userMessage}</>
      </UserMessage>
    </StyledChatMessage>
  );
}

export default ChatMessage;
