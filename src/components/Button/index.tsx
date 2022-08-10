import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--color-background-button);
  color: var(--color-black);
  font-weight: 600;
  padding: 16px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
