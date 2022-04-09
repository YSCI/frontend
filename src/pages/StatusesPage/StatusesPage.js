import React, { useEffect } from 'react'

import { Table, Filter } from 'components'
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
  useEffect(() => {
    loadStatuses()
  }, [loadStatuses])

  return (
    <Layout>
      <S.StatusesPageContainer>
        <Table
          data={statuses.list}
          onDelete={deleteStatus}
          FormComponent={StatusForm}
          columns={tableColumns.status}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.StatusesPageContainer>
    </Layout>
  )
}
