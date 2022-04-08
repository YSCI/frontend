import React, { useEffect} from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { Button } from 'ui'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommissariatsPage.styles'
import { CommissariatForm } from './components/CommissariatForm'
import { FiltersList } from './components/FiltersList'

export const CommissariatsPage = ({
  showModal,
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
        <Filter>
          <FiltersList />
        </Filter>
        <Table
          data={commissariats.list}
          onDelete={deleteCommissariat}
          FormComponent={CommissariatForm}
          columns={tableColumns.commissariat}
        />
      </S.CommissariatsPageContainer>
    </Layout>
  )
}
