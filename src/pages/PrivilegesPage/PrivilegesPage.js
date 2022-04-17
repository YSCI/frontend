import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './PrivilegesPage.styles'
import { PrivilegeForm } from './components/PrivilegeForm'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const PrivilegesPage = ({
  privileges,
  deletePrivilege,
  loadPrivileges
}) => {
  useEffect(() => {
    loadPrivileges(history.location.search)
  }, [loadPrivileges])

  return (
    <Layout>
      <S.PrivilegesPageContainer>
        <Table
          data={privileges.list}
          onDelete={deletePrivilege}
          FormComponent={PrivilegeForm}
          FilterComponent={FiltersList}
          columns={tableColumns.privilege}
        />
      </S.PrivilegesPageContainer>
    </Layout>
  )
}
