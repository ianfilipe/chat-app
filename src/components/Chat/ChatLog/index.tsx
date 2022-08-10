import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ws } from "../../../api/ws";
import { IChat } from "../../../interfaces/IChat";
import { chatState } from "../../../state/atom";
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
  const chat = useRecoilValue<IChat[]>(chatState);

  ws.onmessage = (msg) => {
    if (msg.data instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("receba!", JSON.parse(reader.result as string));
      };
      reader.readAsText(msg.data);
    }
  };

  return (
    <StyledChatLog>
      {chat.map((it, index) => (
        <ChatMessage
          key={index}
          userName={it.userName}
          userMessage={it.userMessage}
        />
      ))}
    </StyledChatLog>
  );
}

export default ChatLog;
