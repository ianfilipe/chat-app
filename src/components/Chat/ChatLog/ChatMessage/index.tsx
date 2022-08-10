import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IChat } from "../../../../interfaces/IChat";
import { chatState } from "../../../../state/atom";

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

interface Props {
  userName: string;
  userMessage: string;
}

function ChatMessage({ userName, userMessage }: Props) {
  const chat = useRecoilValue<IChat[]>(chatState);

  return (
    <StyledChatMessage>
      <UserName>{userName}</UserName>
      <UserMessage>
        <>: {userMessage}</>
      </UserMessage>
    </StyledChatMessage>
  );
}

export default ChatMessage;
