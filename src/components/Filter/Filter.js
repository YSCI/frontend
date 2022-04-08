import React from 'react'

import * as S from './Filter.styles'

export const Filter = ({
  children
}) => {
  return (
    <S.FilterContainer className='Filter'>
      <S.FilterHeader>
        <S.HeaderTitle>
          Ֆիլտրներ
        </S.HeaderTitle>
      </S.FilterHeader>
      <S.Divider />
      <S.FilterContent>
        { children }
      </S.FilterContent>
    </S.FilterContainer>
  )
}