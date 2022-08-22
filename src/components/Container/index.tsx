import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  /* padding: 48px; */
  /* gap: 32px; */
  height: 100vh;
`

interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
