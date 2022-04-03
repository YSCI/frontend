import React, { useEffect, useState } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Select, Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './HealthStatusesPage.styles'
import { HealthStatusForm } from './components/HealthStatusForm'

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
          <Select
            placeholder='Անվանում'
          />
        </Filter>
        <Button onClick={() => showModal(HealthStatusForm)}>
          Ավելացնել
        </Button>
        <Table
          data={healthStatuses.list}
          columns={tableColumns.healthStatus({
            onEdit: (editableHealthStatus) => showModal(HealthStatusForm, { editableHealthStatus }),
            onDelete: (healthStatusId) => deleteHealthStatus(healthStatusId)
          })}
        />
      </S.HealthStatusesPageContainer>
    </Layout>
  )
}
