import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './StudentsPage.styles'
import { StudentForm } from './components/StudentForm'
import { FiltersList } from './components/FiltersList'
import { Button } from 'ui'
import { AssignCommandForm } from './components/AssignCommandForm'

export const StudentsPage = ({
  students,
  showModal,
  loadStudents,
  deleteStudent
}) => {

  useEffect(() => {
    loadStudents()
  }, [loadStudents])

  return (
    <Layout>
      <S.StudentsPageContainer>
        <Table
          data={students.list}
          onDelete={deleteStudent}
          FormComponent={StudentForm}
          columns={tableColumns.students}
          FilterComponent={FiltersList}
          customActions={(selectedRows) => {
            return (
              <Button
                disable={selectedRows.length === 0}
                onClick={() => showModal(AssignCommandForm, { studentIds: selectedRows.map(row => row.original.id) })}
              >
                Կցագրել հրաման
              </Button>
            )
          }}
        />
        {/* <Filter>
          <FiltersList />
        </Filter> */}
      </S.StudentsPageContainer>
    </Layout>
  )
}
