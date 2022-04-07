import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

import { CenteredFlex } from './styles'

export const Button = ({
  children,
  className,
  ...rest
}) => {
  return (
    <ButtonContainer className={cx({ [className]: true }, 'Button')} {...rest}>
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
  transition: all 0.3s ease;
  padding: 12px;

  &.main {
    color: #fff;
    background: ${({ theme }) => theme.colors.green};

    &:hover {
      background: ${({ theme }) => theme.colors.lightGreen};
    }
  }

  &.bordered {
    border: 2px solid #d9d9d9;

    &:hover {
      border-color: ${({ theme }) => theme.colors.lightGreen};
    }
  }

  &.danger {
    color: #fff;
    background: #b01c25;

    &:hover {
      background: #e01b28;
    }
  }
`