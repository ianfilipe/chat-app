import styled from "styled-components";
import Button from "../../Button";
import Input from "../../Input";

const StyledSendChat = styled.div`
  display: flex;
  gap: 8px;
`;

function SendChat() {
  return (
    <StyledSendChat>
      <Input placeholder="Envie sua mensagem" />
      <Button>Chat</Button>
    </StyledSendChat>
  );
}

export default SendChat;
