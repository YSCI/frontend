import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { FiltersList } from './components/FiltersList'
import { tableColumns } from 'constants/tableColumns'
import * as S from './ProfessionsPage.styles'
import { ProfessionForm } from './components/ProfessionForm'
import { history } from 'system/history'

export const ProfessionsPage = ({
  professions,
  deleteProfession,
  loadProfessions
}) => {
  useEffect(() => {
    loadProfessions(history.location.search)
  }, [loadProfessions])

  return (
    <Layout>
      <S.ProfessionsPageContainer>
        <Table
          data={professions.list}
          onDelete={deleteProfession}
          FormComponent={ProfessionForm}
          FilterComponent={FiltersList}
          columns={tableColumns.profession}
        />
      </S.ProfessionsPageContainer>
    </Layout>
  )
}
