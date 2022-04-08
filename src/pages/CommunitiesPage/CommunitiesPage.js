import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommunitiesPage.styles'
import { CommunityForm } from './components/CommunityForm'
import { FiltersList } from './components/FiltersList'

export const CommunitiesPage = ({
  showModal,
  communities,
  deleteCommunity,
  loadCommunities
}) => {
  useEffect(() => {
    loadCommunities()
  }, [loadCommunities])

  return (
    <Layout>
      <S.CommunitiesPageContainer>
        <Filter>
          <FiltersList />
        </Filter>
        <Table
          data={communities.list}
          onDelete={deleteCommunity}
          FormComponent={CommunityForm}
          columns={tableColumns.community}
        />
      </S.CommunitiesPageContainer>
    </Layout>
  )
}
