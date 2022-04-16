import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './RegionsPage.styles'
import { RegionForm } from './components/RegionForm'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const RegionsPage = ({
  regions,
  deleteRegion,
  loadRegions
}) => {
  useEffect(() => {
    loadRegions(history.location.search)
  }, [loadRegions])

  return (
    <Layout>
      <S.RegionsPageContainer>
        <Table
          data={regions.list}
          onDelete={deleteRegion}
          FormComponent={RegionForm}
          FilterComponent={FiltersList}
          columns={tableColumns.region}
        />
      </S.RegionsPageContainer>
    </Layout>
  )
}
