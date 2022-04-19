import React from 'react'
import styled from 'styled-components'

export const Input = ({
  value,
  onEnter,
  onChange,
  placeholder,
  ...rest
}) => {
  const onInputChange = e => {
    onChange(e.target.value)
  }

  const handleKeypress = e => {
    if (e.key === 'Enter') onEnter()
  }

  return (
    <InputContainer>
      {
        value &&
          <Placeholder>
            { placeholder }
          </Placeholder>
      }
      <StyledInput
        {...rest}
        value={value}
        onChange={onInputChange}
        onKeyPress={handleKeypress}
        placeholder={!value ? placeholder : ''}
      />
    </InputContainer>
  )
}

const Placeholder = styled.div`
  position: absolute;
  background: #fff;
  font-size: 13px;
  top: -10px;
  left: 10px;
  color: #B8BCCA;
  font-weight: 500;
`

const InputContainer = styled.div`
  position: relative;
`

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