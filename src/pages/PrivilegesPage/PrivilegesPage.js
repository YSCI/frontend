import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './PrivilegesPage.styles'
import { PrivilegeForm } from './components/PrivilegeForm'
import { FiltersList } from './components/FiltersList'

export const PrivilegesPage = ({
  showModal,
  privileges,
  deletePrivilege,
  loadPrivileges
}) => {
  useEffect(() => {
    loadPrivileges()
  }, [loadPrivileges])

  return (
    <Layout>
      <S.PrivilegesPageContainer>
        <Filter>
          <FiltersList />
        </Filter>
        <Table
          data={privileges.list}
          onDelete={deletePrivilege}
          FormComponent={PrivilegeForm}
          columns={tableColumns.privilege}
        />
      </S.PrivilegesPageContainer>
    </Layout>
  )
}
