import React, { useEffect, useState } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Select, Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './NationalitiesPage.styles'
import { NationalityForm } from './components/NationalityForm'

export const NationalitiesPage = ({
  showModal,
  nationalities,
  deleteNationality,
  loadNationalities
}) => {
  useEffect(() => {
    loadNationalities()
  }, [loadNationalities])

  return (
    <Layout>
      <S.NationalitiesPageContainer>
        <Filter>
          <Select
            placeholder='Անվանում'
          />
        </Filter>
        <Button onClick={() => showModal(NationalityForm)}>
          Ավելացնել
        </Button>
        <Table
          data={nationalities.list}
          columns={tableColumns.nationality({
            onEdit: (editableNationality) => showModal(NationalityForm, { editableNationality }),
            onDelete: (nationalityId) => deleteNationality(nationalityId)
          })}
        />
      </S.NationalitiesPageContainer>
    </Layout>
  )
}
