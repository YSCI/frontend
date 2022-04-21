import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { FiltersList } from './components/FiltersList'
import { tableColumns } from 'constants/tableColumns'
import * as S from './ProfessionsPage.styles'
import { ProfessionForm } from './components/ProfessionForm'
import { SubjectForm } from './components/SubjectForm'

export const ProfessionsPage = ({
  professions,
  deleteSubject,
  deleteProfession,
  loadProfessions,
  loadProfessionSubjects
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
          SubComponent={({ row }) => <Table
            data={row.original.subjects?.list}
            loadData={() => loadProfessionSubjects(row.original.id)}
            onDelete={deleteSubject}
            FormComponent={(props) => <SubjectForm {...props} professionId={row.original.id} />}
            columns={tableColumns.subjects}
          />}
          columns={tableColumns.profession}
        />
      </S.ProfessionsPageContainer>
    </Layout>
  )
}
