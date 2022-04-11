import React, { useEffect } from 'react'


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
  useEffect(() => {
    loadCitizenships()
  }, [loadCitizenships])

  return (
    <Layout>
      <S.CitizenshipPageContainer>
        <Table
          data={citizenships.list}
          onDelete={deleteCitizenship}
          FormComponent={CitizenshipForm}
          FilterComponent={FiltersList}
          columns={tableColumns.citizenship}
        />
      </S.CitizenshipPageContainer>
    </Layout>
  )
}
