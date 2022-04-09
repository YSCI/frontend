import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './NationalitiesPage.styles'
import { NationalityForm } from './components/NationalityForm'
import { FiltersList } from './components/FiltersList'

export const NationalitiesPage = ({
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
        <Table
          data={nationalities.list}
          onDelete={deleteNationality}
          FormComponent={NationalityForm}
          columns={tableColumns.nationality}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.NationalitiesPageContainer>
    </Layout>
  )
}
