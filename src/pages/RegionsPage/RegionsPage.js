import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './RegionsPage.styles'
import { RegionForm } from './components/RegionForm'
import { FiltersList } from './components/FiltersList'

export const RegionsPage = ({
  showModal,
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
        <Filter>
          <FiltersList />
        </Filter>
        <Table
           data={regions.list}
          onDelete={deleteRegion}
          FormComponent={RegionForm}
          columns={tableColumns.region}
        />
      </S.RegionsPageContainer>
    </Layout>
  )
}
