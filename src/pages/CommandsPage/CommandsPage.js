import React, { useEffect } from 'react'


import { Table, Filter } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommandsPage.styles'
import { CommandForm } from './components/CommandForm'
import { FiltersList } from './components/FiltersList'

export const CommandsPage = ({
  commands,
  deleteCommand,
  loadCommands
}) => {
  useEffect(() => {
    loadCommands()
  }, [loadCommands])

  return (
    <Layout>
      <S.CommandsPageContainer>
        <Table
          data={commands.list}
          onDelete={deleteCommand}
          FormComponent={CommandForm}
          columns={tableColumns.commands}
        />
        <Filter>
          <FiltersList />
        </Filter>
      </S.CommandsPageContainer>
    </Layout>
  )
}
