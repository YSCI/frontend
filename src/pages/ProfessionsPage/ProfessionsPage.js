import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
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
  useEffect(() => {
    loadProfessions()
  }, [loadProfessions])

  return (
    <Layout>
      <S.ProfessionsPageContainer>
        <Table
          data={professions.list}
          onDelete={deleteProfession}
          FormComponent={ProfessionForm}
          columns={tableColumns.profession}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.ProfessionsPageContainer>
    </Layout>
  )
}
