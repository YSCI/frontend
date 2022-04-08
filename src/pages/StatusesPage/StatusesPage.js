import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './StatusesPage.styles'
import { StatusForm } from './components/StatusForm'
import { FiltersList } from './components/FiltersList'

export const StatusesPage = ({
  showModal,
  statuses,
  deleteStatus,
  loadStatuses
}) => {
  useEffect(() => {
    loadStatuses()
  }, [loadStatuses])

  return (
    <Layout>
      <S.StatusesPageContainer>
        <Filter>
          <FiltersList />
        </Filter>
        <Table
          data={statuses.list}
          onDelete={deleteStatus}
          FormComponent={StatusForm}
          columns={tableColumns.status}
        />
      </S.StatusesPageContainer>
    </Layout>
  )
}
