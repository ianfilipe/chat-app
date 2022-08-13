import styled from "styled-components";

const StyledInput = styled.input`
  background: var(--color-background-input);
  padding: 16px;
  border-radius: 8px;
  color: var(--color-white);
  width: 100%;
  ::placeholder {
    color: var(--color-placeholder-input);
  }
`;

interface Props {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, value, onChange }: Props) {
  return (
    <StyledInput onChange={onChange} value={value} placeholder={placeholder} />
  );
}

export default Input;
