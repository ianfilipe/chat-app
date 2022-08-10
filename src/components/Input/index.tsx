import styled from "styled-components";

const StyledInput = styled.input`
  background: var(--color-background-input);
  padding: 16px;
  border-radius: 8px;
  color: var(--color-white);
  width: 100%;
`;

interface Props {
  placeholder: string;
}

function Input({ placeholder }: Props) {
  return <StyledInput placeholder={placeholder} />;
}

export default Input;
