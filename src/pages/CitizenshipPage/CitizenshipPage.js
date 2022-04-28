import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CitizenshipPage.styles'
import { CitizenshipForm } from './components/CitizenshipForm'
import { FiltersList } from './components/FiltersList'

export const CitizenshipPage = ({
  citizenships,
  deleteCitizenship,
  loadCitizenships
}) => {
  return (
    <Layout>
      <S.CitizenshipPageContainer>
        <Table
          title='Քաղաքացիություններ'
          data={citizenships.list}
          total={citizenships.total}
          loadData={loadCitizenships}
          onDelete={deleteCitizenship}
          FormComponent={CitizenshipForm}
          FilterComponent={FiltersList}
          columns={tableColumns.citizenship}
        />
      </S.CitizenshipPageContainer>
    </Layout>
  )
}
