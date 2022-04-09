import React, { useEffect, useState } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout/Layout'
import { Select, Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './ProfessionsPage.styles'
import { ProfessionForm } from './components/ProfessionForm'

export const ProfessionsPage = ({
  showModal,
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
          <Select
            placeholder='Անուն'
          />
        </Filter>
      </S.ProfessionsPageContainer>
    </Layout>
  )
}
