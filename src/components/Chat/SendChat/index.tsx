import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { chatState } from "../../../state/atom";
import Button from "../../Button";
import Input from "../../Input";

const StyledSendChat = styled.div`
  display: flex;
  gap: 8px;
`;

function SendChat() {
  const chat = useRecoilValue(chatState);
  const [value, setValue] = useState("");

  return (
    <StyledSendChat>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Envie sua mensagem"
      />
      <Button onClick={() => {}}>Chat</Button>
    </StyledSendChat>
  );
}

export default SendChat;
