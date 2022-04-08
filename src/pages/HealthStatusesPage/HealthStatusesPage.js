import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './HealthStatusesPage.styles'
import { HealthStatusForm } from './components/HealthStatusForm'
import { FiltersList } from './components/FiltersList'

export const HealthStatusesPage = ({
  showModal,
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
        <Filter>
          <FiltersList />
        </Filter>
        <Table
           data={healthStatuses.list}
          onDelete={deleteHealthStatus}
          FormComponent={HealthStatusForm}
          columns={tableColumns.healthStatus}
        />
      </S.HealthStatusesPageContainer>
    </Layout>
  )
}
