import React from 'react'

import { Table } from 'components'
import { Layout } from 'components/Layout'
import * as S from './StatusesPage.styles'
import { StatusForm } from './components/StatusForm'
import { tableColumns } from 'constants/tableColumns'
import { FiltersList } from './components/FiltersList'

export const StatusesPage = ({
  statuses,
  loadStatuses,
  deleteStatus
}) => {
  return (
    <Layout>
      <S.StatusesPageContainer>
        <Table
          title='Կարգավիճակներ'
          data={statuses.list}
          total={statuses.total}
          loadData={loadStatuses}
          onDelete={deleteStatus}
          FormComponent={StatusForm}
          FilterComponent={FiltersList}
          columns={tableColumns.status}
        />
      </S.StatusesPageContainer>
    </Layout>
  )
}
