import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './GroupsPage.styles'
import { GroupForm } from './components/GroupForm'
import { FiltersList } from './components/FiltersList'

export const GroupsPage = ({
  groups,
  deleteGroup,
  loadGroups
}) => {
  return (
    <Layout>
      <S.GroupsPageContainer>
        <Table
          data={groups.list}
          loadData={loadGroups}
          onDelete={deleteGroup}
          FormComponent={GroupForm}
          FilterComponent={FiltersList}
          columns={tableColumns.groups}
        />
      </S.GroupsPageContainer>
    </Layout>
  )
}
