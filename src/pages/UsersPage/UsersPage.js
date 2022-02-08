import React from 'react'

import { Layout } from 'components/Layout'
import * as S from './UsersPage.styles'
import { Select } from 'ui'
import { Filter } from 'components'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export const UsersPage = () => {
  return (
    <Layout>
      <S.UsersPageContainer className='UsersPage'>
        <Filter>
          <Select
            options={options}
            placeholder='Անուն'
          />
        </Filter>
      </S.UsersPageContainer>
    </Layout>
  )
}