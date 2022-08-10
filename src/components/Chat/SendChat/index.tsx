import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IChat } from "../../../interfaces/IChat";
import { chatState } from "../../../state/atom";
import Button from "../../Button";
import Input from "../../Input";

const StyledSendChat = styled.div`
  display: flex;
  gap: 8px;
`;

function SendChat() {
  const [chat, setChat] = useRecoilState<IChat[]>(chatState);
  const [value, setValue] = useState("");

  const sendChat = () => {
    let newChat = [...chat].map((it) => {
      return { ...it, userName: "teste", userMessage: value };
    });
    setChat(newChat);
    setValue("");
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
