import React from 'react'

import { Table } from 'components'
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
  return (
    <Layout>
      <S.HealthStatusesPageContainer>
        <Table
          data={healthStatuses.list}
          loadData={loadHealthStatuses}
          onDelete={deleteHealthStatus}
          FormComponent={HealthStatusForm}
          FilterComponent={FiltersList}
          columns={tableColumns.healthStatus}
        />
      </S.HealthStatusesPageContainer>
    </Layout>
  )
}
