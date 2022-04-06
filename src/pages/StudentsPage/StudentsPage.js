import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './StudentsPage.styles'
import { StudentForm } from './components/StudentForm'

export const StudentsPage = ({
  showModal,
  students,
  deleteStudent,
  loadStudents
}) => {
  useEffect(() => {
    loadStudents()
  }, [loadStudents])

  return (
    <Layout>
      <S.CommunitiesPageContainer>
        {/* <Filter>
          <FiltersList />
        </Filter> */}
        <Button onClick={() => showModal(StudentForm)}>
          Ավելացնել
        </Button>
        <Table
          data={students.list}
          columns={tableColumns.students({
            onEdit: (editableStudent) => showModal(StudentForm, { editableStudent }),
            onDelete: (studentId) => deleteStudent(studentId)
          })}
        />
      </S.CommunitiesPageContainer>
    </Layout>
  )
}
