import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './RegionsPage.styles'
import { RegionForm } from './components/RegionForm'
import { FiltersList } from './components/FiltersList'

export const RegionsPage = ({
  regions,
  deleteRegion,
  loadRegions
}) => {
  useEffect(() => {
    loadRegions()
  }, [loadRegions])

  return (
    <Layout>
      <S.RegionsPageContainer>
        <Table
          data={regions.list}
          onDelete={deleteRegion}
          FormComponent={RegionForm}
          columns={tableColumns.region}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.RegionsPageContainer>
    </Layout>
  )
}
