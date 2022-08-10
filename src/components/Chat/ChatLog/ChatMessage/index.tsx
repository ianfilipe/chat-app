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

function ChatMessage() {
  return (
    <StyledChatMessage>
      <UserName>ianFss</UserName>
      <UserMessage>: lorem ipsum dolor sit amet</UserMessage>
    </StyledChatMessage>
  );
}

export default ChatMessage;
