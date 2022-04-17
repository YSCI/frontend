import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './HealthStatusesPage.styles'
import { HealthStatusForm } from './components/HealthStatusForm'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const HealthStatusesPage = ({
  healthStatuses,
  deleteHealthStatus,
  loadHealthStatuses
}) => {
  useEffect(() => {
    loadHealthStatuses(history.location.search)
  }, [loadHealthStatuses])

  return (
    <Layout>
      <S.HealthStatusesPageContainer>
        <Table
          data={healthStatuses.list}
          onDelete={deleteHealthStatus}
          FormComponent={HealthStatusForm}
          FilterComponent={FiltersList}
          columns={tableColumns.healthStatus}
        />
      </S.HealthStatusesPageContainer>
    </Layout>
  )
}
