import React from 'react'


import { Table } from 'components'
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
  return (
    <Layout>
      <S.CommunitiesPageContainer>
        <Table
          data={communities.list}
          loadData={loadCommunities}
          onDelete={deleteCommunity}
          FormComponent={CommunityForm}
          FilterComponent={FiltersList}
          columns={tableColumns.community}
        />
      </S.CommunitiesPageContainer>
    </Layout>
  )
}
