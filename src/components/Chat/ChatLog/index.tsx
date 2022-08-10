import styled from "styled-components";
import ChatMessage from "./ChatMessage";

const StyledChatLog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  margin-bottom: 16px;
  overflow-y: scroll;
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function ChatLog() {
  return (
    <StyledChatLog>
      <ChatMessage />
    </StyledChatLog>
  );
}

export default ChatLog;
