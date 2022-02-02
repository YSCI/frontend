import React from 'react'
import styled from 'styled-components'


import { CenteredFlex } from './styles'

export const Button = ({
  children,
  className,
  ...rest
}) => {
  return (
    <ButtonContainer className={className} {...rest}>
      { children }
    </ButtonContainer>
  )
}

Button.defaultProps = {
  className: 'main'
}

export const ButtonContainer = styled(CenteredFlex)`
  cursor: pointer;
  border-radius: 6px;
  width: calc(100% - 24px);
  transition: background 0.3s ease;

  &.main {
    color: #fff;
    padding: 12px;
    background: ${({ theme }) => theme.colors.green};

    &:hover {
      background: ${({ theme }) => theme.colors.lightGreen};
    }
  }
`