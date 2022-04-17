import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { FiltersList } from './components/FiltersList'
import { tableColumns } from 'constants/tableColumns'
import * as S from './ProfessionsPage.styles'
import { ProfessionForm } from './components/ProfessionForm'

export const ProfessionsPage = ({
  professions,
  deleteProfession,
  loadProfessions
}) => {
  return (
    <Layout>
      <S.ProfessionsPageContainer>
        <Table
          data={professions.list}
          loadData={loadProfessions}
          onDelete={deleteProfession}
          FormComponent={ProfessionForm}
          FilterComponent={FiltersList}
          columns={tableColumns.profession}
        />
      </S.ProfessionsPageContainer>
    </Layout>
  )
}
