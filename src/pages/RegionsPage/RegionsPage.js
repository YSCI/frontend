import React, { useEffect, useState } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Select, Button } from 'ui'
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
        <Button onClick={() => showModal(RegionForm)}>
          Ավելացնել
        </Button>
        <Table
          data={regions.list}
          columns={tableColumns.region({
            onEdit: (editableRegion) => showModal(RegionForm, { editableRegion }),
            onDelete: (regionId) => deleteRegion(regionId)
          })}
        />
      </S.RegionsPageContainer>
    </Layout>
  )
}
