import React from 'react'

import { Table } from 'components'
import rateIcon from 'images/rating.png'
import { Layout } from 'components/Layout'
import attachIcon from 'images/attach.png'
import * as S from './StudentsPage.styles'
import { tableColumns } from 'constants/tableColumns'
import { StudentForm } from './components/StudentForm'
import { FiltersList } from './components/FiltersList'
import { AssignCommandForm } from './components/AssignCommandForm'
import { RateForm } from 'components/RateForm'

export const StudentsPage = ({
  students,
  showModal,
  loadStudents,
  deleteStudent
}) => {
  return (
    <Layout>
      <S.StudentsPageContainer>
        <Table
          title='Ուսանողներ'
          data={students.list}
          total={students.total}
          onDelete={deleteStudent}
          FormComponent={StudentForm}
          columns={tableColumns.students}
          loadData={loadStudents}
          FilterComponent={FiltersList}
          isStudentsPage={true}
          customActions={(selectedRows) => ([
            {
              icon: rateIcon,
              title: 'Գնահատել',
              disabled: selectedRows.length !== 1,
              onClick: () => showModal(RateForm, { student: selectedRows[0].original })
            },
            {
              icon: attachIcon,
              title: 'Կցագրել հրաման',
              disabled: selectedRows.length === 0,
              onClick: () => showModal(AssignCommandForm, { studentIds: selectedRows.map(row => row.original.id) })
            }
          ])}
        />
      </S.StudentsPageContainer>
    </Layout>
  )
}
