import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommunitiesPage.styles'
import { CommunityForm } from './components/CommunityForm'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const CommunitiesPage = ({
  communities,
  deleteCommunity,
  loadCommunities
}) => {
  useEffect(() => {
    loadCommunities(history.location.search)
  }, [loadCommunities])

  return (
    <Layout>
      <S.CommunitiesPageContainer>
        <Table
          data={communities.list}
          onDelete={deleteCommunity}
          FormComponent={CommunityForm}
          FilterComponent={FiltersList}
          columns={tableColumns.community}
        />
      </S.CommunitiesPageContainer>
    </Layout>
  )
}
