import React, { useEffect } from 'react'


import { Filter, Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './StudentsPage.styles'
import { StudentForm } from './components/StudentForm'
import { FiltersList } from './components/FiltersList'

export const StudentsPage = ({
  students,
  deleteStudent,
  loadStudents
}) => {
  useEffect(() => {
    loadStudents()
  }, [loadStudents])

  return (
    <Layout>
      <S.StudentsPageContainer>
        <Filter>
          <FiltersList />
        </Filter>
        <Table
          data={students.list}
          onDelete={deleteStudent}
          FormComponent={StudentForm}
          columns={tableColumns.students}
        />
      </S.StudentsPageContainer>
    </Layout>
  )
}
