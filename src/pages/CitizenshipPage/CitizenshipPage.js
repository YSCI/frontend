import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
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
          columns={tableColumns.citizenship}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.CitizenshipPageContainer>
    </Layout>
  )
}
