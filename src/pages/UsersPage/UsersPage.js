import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { FiltersList } from './components/FiltersList'
import { tableColumns } from 'constants/tableColumns'
import * as S from './UsersPage.styles'
import { UserForm } from './components/UserForm'

export const UsersPage = ({
  users,
  loadUsers,
  deleteUser
}) => {
  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <Layout>
      <S.UsersPageContainer>
        <Table
          data={users.list}
          onDelete={deleteUser}
          FormComponent={UserForm}
          columns={tableColumns.users}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.UsersPageContainer>
    </Layout>
  )
}
