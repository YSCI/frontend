import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommandsPage.styles'
import { CommandForm } from './components/CommandForm'
import { FiltersList } from './components/FiltersList'
import { history } from 'system/history'

export const CommandsPage = ({
  commands,
  deleteCommand,
  loadCommands
}) => {
  useEffect(() => {
    loadCommands(history.location.search)
  }, [loadCommands])

  return (
    <Layout>
      <S.CommandsPageContainer>
        <Table
          data={commands.list}
          onDelete={deleteCommand}
          FormComponent={CommandForm}
          FilterComponent={FiltersList}
          columns={tableColumns.commands}
        />
      </S.CommandsPageContainer>
    </Layout>
  )
}
