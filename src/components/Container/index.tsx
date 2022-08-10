import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 48px;
`;

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
