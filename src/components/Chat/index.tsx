import styled from "styled-components";
import ChatLog from "./ChatLog";
import SendChat from "./SendChat";

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
`;

function Chat() {
  return (
    <StyledChat>
      <ChatLog />
      <SendChat />
    </StyledChat>
  );
}

export default Chat;
