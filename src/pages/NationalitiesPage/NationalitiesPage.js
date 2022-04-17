import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './NationalitiesPage.styles'
import { NationalityForm } from './components/NationalityForm'
import { FiltersList } from './components/FiltersList'

export const NationalitiesPage = ({
  nationalities,
  loadNationalities,
  deleteNationality
}) => {
  return (
    <Layout>
      <S.NationalitiesPageContainer>
        <Table
          data={nationalities.list}
          loadData={loadNationalities}
          onDelete={deleteNationality}
          FormComponent={NationalityForm}
          FilterComponent={FiltersList}
          columns={tableColumns.nationality}
        />
      </S.NationalitiesPageContainer>
    </Layout>
  )
}
