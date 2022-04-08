import React from 'react'

import * as S from './FormLabelItem.styles'

export const FormLabelItem = ({ label, children }) => {
  return (
    <S.FormLabelItemContainer className='FormLabelItem'>
      <S.Label>
        { label }
      </S.Label>
      {
        children
      }
    </S.FormLabelItemContainer>
  )
}