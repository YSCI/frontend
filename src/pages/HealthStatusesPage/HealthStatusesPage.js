import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './HealthStatusesPage.styles'
import { HealthStatusForm } from './components/HealthStatusForm'
import { FiltersList } from './components/FiltersList'

export const HealthStatusesPage = ({
  healthStatuses,
  deleteHealthStatus,
  loadHealthStatuses
}) => {
  useEffect(() => {
    loadHealthStatuses()
  }, [loadHealthStatuses])

  return (
    <Layout>
      <S.HealthStatusesPageContainer>
        <Table
          data={healthStatuses.list}
          onDelete={deleteHealthStatus}
          FormComponent={HealthStatusForm}
          columns={tableColumns.healthStatus}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.HealthStatusesPageContainer>
    </Layout>
  )
}
