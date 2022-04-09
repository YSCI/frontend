import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommunitiesPage.styles'
import { CommunityForm } from './components/CommunityForm'
import { FiltersList } from './components/FiltersList'

export const CommunitiesPage = ({
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
        <Table
          data={communities.list}
          onDelete={deleteCommunity}
          FormComponent={CommunityForm}
          columns={tableColumns.community}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.CommunitiesPageContainer>
    </Layout>
  )
}
