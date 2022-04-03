import React, { useEffect, useState } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Select, Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './PrivilegesPage.styles'
import { PrivilegeForm } from './components/PrivilegeForm'

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
          <Select
            placeholder='Անվանում'
          />
        </Filter>
        <Button onClick={() => showModal(PrivilegeForm)}>
          Ավելացնել
        </Button>
        <Table
          data={privileges.list}
          columns={tableColumns.privilege({
            onEdit: (editablePrivilege) => showModal(PrivilegeForm, { editablePrivilege }),
            onDelete: (privilegeId) => deletePrivilege(privilegeId)
          })}
        />
      </S.PrivilegesPageContainer>
    </Layout>
  )
}
