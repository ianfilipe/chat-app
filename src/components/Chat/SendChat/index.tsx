import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ws } from "../../../api/ws";
import { IChat } from "../../../interfaces/IChat";
import { chatState } from "../../../state/atom";
import Button from "../../Button";
import Input from "../../Input";
const StyledSendChat = styled.div`
  display: flex;
  gap: 8px;
`;

function SendChat() {
  const [value, setValue] = useState("");
  const [chat, setChat] = useRecoilState<IChat[]>(chatState);

  const sendChat = () => {
    let newChat = {
      userName: "Teste",
      userMessage: value,
    };
    if (newChat.userMessage) {
      setChat([...chat, newChat]);
      ws.send(JSON.stringify(newChat));
      // axios
      //   .post("http://localhost:3000/message", {
      //     userName: "Teste",
      //     userMessage: value,
      //   })
      //   .then(() => {
      //     console.log("foi!");
      //   })
      //   .catch((err) => console.log(err));
    }
    // setValue("");
  };

  return (
    <StyledSendChat>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Envie sua mensagem"
      />
      <Button
        onClick={() => {
          sendChat();
        }}
      >
        Chat
      </Button>
    </StyledSendChat>
  );
}

export default SendChat;
