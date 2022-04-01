import React, { useEffect, useState } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Select, Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './StatusesPage.styles'
import { StatusForm } from './components/StatusForm'

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
          <Select
            placeholder='Անվանում'
          />
        </Filter>
        <Button onClick={() => showModal(StatusForm)}>
          Ավելացնել
        </Button>
        <Table
          data={statuses.list}
          columns={tableColumns.status({
            onEdit: (editableStatus) => showModal(StatusForm, { editableStatus }),
            onDelete: (statusId) => deleteStatus(statusId)
          })}
        />
      </S.StatusesPageContainer>
    </Layout>
  )
}
