import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './NationalitiesPage.styles'
import { NationalityForm } from './components/NationalityForm'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const NationalitiesPage = ({
  nationalities,
  deleteNationality,
  loadNationalities
}) => {
  useEffect(() => {
    loadNationalities(history.location.search)
  }, [loadNationalities])

  return (
    <Layout>
      <S.NationalitiesPageContainer>
        <Table
          data={nationalities.list}
          onDelete={deleteNationality}
          FormComponent={NationalityForm}
          FilterComponent={FiltersList}
          columns={tableColumns.nationality}
        />
      </S.NationalitiesPageContainer>
    </Layout>
  )
}
