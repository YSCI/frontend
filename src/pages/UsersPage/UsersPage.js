import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { FiltersList } from './components/FiltersList'
import { tableColumns } from 'constants/tableColumns'
import * as S from './UsersPage.styles'
import { UserForm } from './components/UserForm'
import { history } from 'system/history'

export const UsersPage = ({
  users,
  loadUsers,
  deleteUser
}) => {
  useEffect(() => {
    loadUsers(history.location.search)
  }, [loadUsers])

  return (
    <Layout>
      <S.UsersPageContainer>
        <Table
          data={users.list}
          onDelete={deleteUser}
          FormComponent={UserForm}
          FilterComponent={FiltersList}
          columns={tableColumns.users}
        />
      </S.UsersPageContainer>
    </Layout>
  )
}
