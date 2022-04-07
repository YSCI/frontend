import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './NationalitiesPage.styles'
import { NationalityForm } from './components/NationalityForm'
import { FiltersList } from './components/FiltersList'

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
          <FiltersList />
        </Filter>
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
