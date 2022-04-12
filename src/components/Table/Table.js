import React, { useEffect } from 'react'
import { useBlockLayout, useResizeColumns, useSortBy, useTable, useRowSelect } from 'react-table'
import cx from 'classnames'

import { Button } from 'ui'
import { withConfirmation } from 'helpers'
import * as S from './Table.styles'

const defaultColumn = {
  minWidth: 100,
  width: 250,
  maxWidth: 400
}

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)


export const Table = ({
  data,
  columns,
  onDelete,
  showModal,
  customActions,
  hasActionsBar,
  FormComponent,
  FilterComponent
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useSortBy,
    useBlockLayout,
    useResizeColumns,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div> 
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps?.()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)
  const selectedFirstRow = selectedFlatRows[0]?.original

  return (
    <S.TableContainer className='Table-Container'>
      <table {...getTableProps()} className='Table'>
        <thead>
          <tr className='header-style'/>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <div
                    {...column.getResizerProps()}
                    onClick={(e) => e.stopPropagation()}
                    className={`resizer ${
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row) => {
              prepareRow(row);

              return (
                <tr
                  {...row.getRowProps()}
                  className={cx({ selected: row.isSelected })}
                  onClick={() => row.toggleRowSelected(!row.isSelected)}
                >
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      {
        hasActionsBar &&
          <S.FixedActionsBar>
            <S.FixedActionsBarHeader>
              Գործողություններ
            </S.FixedActionsBarHeader>
            <S.ActionsList>
              <Button onClick={() => showModal(FormComponent)}>
                Ավելացնել
              </Button>
              {
                customActions?.(selectedFlatRows)
              }
              {
                FilterComponent &&
                  <Button onClick={() => showModal(FilterComponent)}>
                    Ֆիլտրներ
                  </Button>
              }
              <Button
                className='bordered'
                disable={selectedFlatRows.length !== 1}
                onClick={() => showModal(FormComponent, { editableData: selectedFirstRow })}
              >
                Փոփոխել
              </Button>
              <Button
                className='danger'
                disable={selectedFlatRows.length === 0}
                onClick={() => withConfirmation({ onYes: () => onDelete(selectedFlatRows.map(row => row.original.id)) })}
              >
                Ջնջել
              </Button>
            </S.ActionsList>
          </S.FixedActionsBar>
      }
    </S.TableContainer>
  )
}

Table.defaultProps = {
  hasActionsBar: true
}