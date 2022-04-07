import React from 'react'
import styled from 'styled-components'


export const Input = ({
  ...rest
}) => {
  const onInputChange = (e) =>
    rest.onChange(e.target.value)

  return (
    <StyledInput
      {...rest}
      onChange={onInputChange}
    />
  )
}

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: 2px solid #d9d9d9;
  width: calc(100% - 28px);
  transition: all 0.3s;
  color: rgba(0,0,0,.85);
  font-size: 14px;

  &::placeholder {
     color: ${({ theme }) => theme.colors.lightGray};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightGreen};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.lightGreen};
  }
`