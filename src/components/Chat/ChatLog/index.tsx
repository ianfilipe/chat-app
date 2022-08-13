import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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
`;

function ChatLog() {
  const [chat, setChat] = useRecoilState<IChat[]>(chatState);

  ws.onmessage = (msg) => {
    if (msg.data instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        setChat([...chat, JSON.parse(reader.result as string)]);
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
