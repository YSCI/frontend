import React, { useState } from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { CenteredFlex } from './styles'

export const Checkbox = ({
  checked,
  onChange,
  className,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const onCheck = () => {
    const checkedUpdated = !isChecked

    onChange(checkedUpdated)
    setIsChecked(checkedUpdated)
  }

  return (
    <CheckboxContainer
      onClick={onCheck}
      className={cx('Checkbox', { isChecked: checked, [className]: true })}
      {...rest}
    >
      <Checked className={cx({ isChecked: checked })}/>
    </CheckboxContainer>
  )
}

Checkbox.defaultProps = {
  checked: false
}

const Checked = styled.div`
  width: 15px;
  height: 15px;
  background: transparent;
  transition: all 0.3s ease;
  border-radius: 3px;

  &.isChecked {
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`

const CheckboxContainer = styled(CenteredFlex)`
  width: 21px;
  height: 21px;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid #fff;
  transition: all 0.3s ease;

  &.main  {
    border-color: #d9d9d9;
  }


  &:hover {
    border-color: ${({ theme }) => theme.colors.lightGreen}
  }

  &.isChecked {
    border-color: ${({ theme }) => theme.colors.lightGreen}
  }
`