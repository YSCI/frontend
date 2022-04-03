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
        <Filter>
          <Select
            placeholder='Անուն'
          />
        </Filter>
        <Button onClick={() => showModal(ProfessionForm)}>
          Ավելացնել
        </Button>
        <Table
          data={professions.list}
          columns={tableColumns.profession({
            onEdit: (editableProfession) => showModal(ProfessionForm, { editableProfession }),
            onDelete: (professionId) => deleteProfession(professionId)
          })}
        />
      </S.ProfessionsPageContainer>
    </Layout>
  )
}
