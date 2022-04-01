import React, { useState } from 'react'
import cx from 'classnames'

import * as S from './Filter.styles'
import arrowPic from 'images/arrow.png'

export const Filter = ({
  children
}) => {
  const [isFiltersOpened, setIsFiltersOpened] = useState(false)

  return null

  return (
    <S.FilterContainer className='Filter'>
      <S.FilterHeader onClick={() => setIsFiltersOpened(!isFiltersOpened)}>
        <S.HeaderTitle>
          Ֆիլտրներ
        </S.HeaderTitle>
        <S.ToggleFilterButton className={cx({ isFiltersOpened })}>
          <S.ToggleFilterIcon src={arrowPic} />
        </S.ToggleFilterButton>
      </S.FilterHeader>
      {
        isFiltersOpened && <S.Divider />
      }
      {
        isFiltersOpened &&
          <S.FilterContent>
            { children }
          </S.FilterContent>
      }
    </S.FilterContainer>
  )
}