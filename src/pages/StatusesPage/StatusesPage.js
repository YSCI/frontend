import React, { useEffect } from 'react'

import { Table } from 'components'
import { Layout } from 'components/Layout'
import * as S from './StatusesPage.styles'
import { StatusForm } from './components/StatusForm'
import { tableColumns } from 'constants/tableColumns'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const StatusesPage = ({
  statuses,
  loadStatuses,
  deleteStatus
}) => {
  useEffect(() => {
    loadStatuses(history.location.search)
  }, [loadStatuses])

  return (
    <Layout>
      <S.StatusesPageContainer>
        <Table
          data={statuses.list}
          onDelete={deleteStatus}
          FormComponent={StatusForm}
          FilterComponent={FiltersList}
          columns={tableColumns.status}
        />
      </S.StatusesPageContainer>
    </Layout>
  )
}
