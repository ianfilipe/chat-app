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

  return (
    <StyledSendChat>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Envie sua mensagem"
      />
      <Button
        onClick={() => {
          let newChat = [...chat].map((it) => {
            return { ...it, userMessage: value };
          });
          setChat(newChat);
        }}
      >
        Chat
      </Button>
    </StyledSendChat>
  );
}

export default SendChat;
