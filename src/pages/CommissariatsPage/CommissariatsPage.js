import React, { useEffect} from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommissariatsPage.styles'
import { CommissariatForm } from './components/CommissariatForm'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const CommissariatsPage = ({
  commissariats,
  deleteCommissariat,
  loadCommissariats
}) => {
  useEffect(() => {
    loadCommissariats(history.location.search)
  }, [loadCommissariats])

  return (
    <Layout>
      <S.CommissariatsPageContainer>
        <Table
          data={commissariats.list}
          onDelete={deleteCommissariat}
          FormComponent={CommissariatForm}
          FilterComponent={FiltersList}
          columns={tableColumns.commissariat}
        />
      </S.CommissariatsPageContainer>
    </Layout>
  )
}
