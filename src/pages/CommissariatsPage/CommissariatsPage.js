import React, { useEffect} from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommissariatsPage.styles'
import { CommissariatForm } from './components/CommissariatForm'
import { FiltersList } from './components/FiltersList'

export const CommissariatsPage = ({
  commissariats,
  deleteCommissariat,
  loadCommissariats
}) => {
  useEffect(() => {
    loadCommissariats()
  }, [loadCommissariats])

  return (
    <Layout>
      <S.CommissariatsPageContainer>
        <Table
          data={commissariats.list}
          onDelete={deleteCommissariat}
          FormComponent={CommissariatForm}
          columns={tableColumns.commissariat}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.CommissariatsPageContainer>
    </Layout>
  )
}
