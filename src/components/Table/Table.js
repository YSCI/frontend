import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react'
import {
  useTable,
  useSortBy,
  useExpanded,
  useRowSelect,
  useBlockLayout,
  useResizeColumns
} from 'react-table'
import qs from 'qs'
import cx from 'classnames'

import { Button } from 'ui'
import * as S from './Table.styles'
import { history } from 'system/history'
import { formatDate, withConfirmation } from 'helpers'
import createIcon from 'images/add.png'
import editIcon from 'images/editing.png'
import deleteIcon from 'images/delete.png'
import filterIcon from 'images/filter.png'
import sortIcon from 'images/sort.png'

const defaultColumn = {
  minWidth: 50,
  width: 250,
  maxWidth: 500
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
  title,
  total,
  columns,
  onDelete,
  loadData,
  showModal,
  isSubTable,
  columnConfig,
  SubComponent,
  customActions,
  hasActionsBar,
  hasSelections,
  FormComponent,
  FilterComponent
}) => {
  const {
    rows,
    prepareRow,
    headerGroups,
    getTableProps,
    selectedFlatRows,
    getTableBodyProps
  } = useTable(
    {
      data,
      autoResetExpanded: false,
      columns,
      manualPagination: true,
      defaultColumn: {
        ...defaultColumn,
        ...columnConfig
      }
    },
    useSortBy,
    useExpanded,
    useRowSelect,
    useBlockLayout,
    useResizeColumns,
    hooks => {
      if (!hasSelections) return

      hooks.visibleColumns.push(columns => [        
        {
          id: 'selection',          
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div> 
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps?.()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
          width: 70
        },
        ...columns,
      ])
    }
  )

  const [currentPage, setCurrentPage] = useState(1)

  const totalCount = total || data.length 
  const pageCount = Math.ceil(totalCount / 6)
  const selectedFirstRow = selectedFlatRows[0]?.original

  const changePage = useCallback((page) => {
    const currentQuery = qs.parse(history.location.search.replace('?', ''))
    setCurrentPage(page)
    loadData({
      ...currentQuery,
      limit: 6,
      offset: (page - 1) * 6,
    })
  }, [loadData, setCurrentPage])

  const gotoPage = useCallback((page) => {
    changePage(page)
  }, [changePage])

  const nextPage = () => {
    changePage(currentPage + 1)
  }

  const prevPage = () => {
    changePage(currentPage - 1)
  }

  useEffect(() => {
    gotoPage(1)
  }, [])

  const paginationButtons = useMemo(() => {
    const buttons = []
    let num = Math.max(currentPage - 1, 1)
    const buttonsCount = Math.min(pageCount, num + 2)

    for (let pageNumber = num; pageNumber <= buttonsCount; pageNumber++) {
      const isPageActive = pageNumber === currentPage

      buttons.push(
        <Button
          onClick={() => gotoPage(pageNumber)}
          className={cx({ bordered: !isPageActive, main: isPageActive })}
        >
          { pageNumber }
        </Button>
      )
    }

    return buttons
  }, [pageCount, currentPage, gotoPage])

  const tBodyRef = useRef(null)
 
  return (
    <S.TableContainer className='Table-Container' hasActionsBar={hasActionsBar}>
      {
        hasActionsBar &&
          <S.FixedActionsBar>
            {/* <S.FixedActionsBarHeader>
              Գործողություններ
            </S.FixedActionsBarHeader> */}
            <S.FixedActionsBarTitle>
              { title }
            </S.FixedActionsBarTitle>
            <S.ActionsList>
              {
                customActions?.(selectedFlatRows)
              }
              <S.Action onClick={() => showModal(FormComponent, { parentRowId: selectedFirstRow })}>
                <img alt='create-icon' src={createIcon}/>
              </S.Action>
              <S.Action
                className={cx({ disabled: selectedFlatRows.length !== 1 })}
                onClick={() => showModal(FormComponent, { editableData: selectedFirstRow })}
              >
                <S.OpacityWrapper />
                <span className="tooltiptextHeader">Նշեք որևէ գրառում</span>
                <img alt='edit-icon' src={editIcon}/>
              </S.Action>
              <S.Action
                className={cx({ disabled: selectedFlatRows.length === 0 })}
                onClick={() => withConfirmation({ onYes: () => onDelete(selectedFlatRows.map(row => row.original.id)) })}
              >
                <S.OpacityWrapper />
                <span className="tooltiptextHeader">Նշեք որևէ գրառում</span>
                <img alt='delete-icon' src={deleteIcon}/>
              </S.Action>
              {
                FilterComponent &&
                  <S.Action onClick={() => showModal(FilterComponent)}>
                    <img alt='create-icon' src={filterIcon}/>
                  </S.Action>
              }
              {/* <Button onClick={() => showModal(FormComponent, { parentRowId: selectedFirstRow })}>
                Ավելացնել
              </Button> */}
              {/* {
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
              </Button> */}
            </S.ActionsList>
          </S.FixedActionsBar>
      }
      <table {...getTableProps()} className='Table'>
        <thead>
          <tr className='header-style'/>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <div
                    {...column.getResizerProps()}
                    onClick={(e) => e.stopPropagation()}
                    className={`resizer ${
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                  {column.isSorted
                    ? <S.SortIcon
                        alt='sort-icon'
                        className={cx({ ascSort: !column.isSortedDesc })}
                        src={sortIcon}
                      />
                    : null
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} ref={tBodyRef}>
          {rows.map(
            (row) => {
              prepareRow(row);
              const { onClick: onExpandableRowClick } = row.getToggleRowExpandedProps()
              const createdInfo = `Ստեղծվել է - ${formatDate(row.original.createdAt)}`
              const updatedInfo = `Թարմացվել է - ${formatDate(row.original.updatedAt)}`
              const rowInfo = createdInfo + '\n' + updatedInfo

              return (
                <>
                  <tr
                    {...row.getRowProps()}
                    key={row.original.id}
                    className={cx({ selected: row.isSelected })}
                    onClick={() => {
                      if (hasSelections) row.toggleRowSelected(!row.isSelected)
                      if (SubComponent) onExpandableRowClick()
                    }}
                  >
                    {row.cells.map((cell, cellIndex) => {

                      const columnKey = cell.column.id.split('.')[0]
                      let cellInfo = null

                      if (row.original[columnKey]?.createdAt) {
                        cellInfo = `Ստեղծվել է - ${formatDate(row.original[columnKey].createdAt)}`
                          + '\n'
                          + `Թարմացվել է - ${formatDate(row.original[columnKey].updatedAt)}`
                      }

                      return (
                        <td {...cell.getCellProps()} className='tooltip'>
                          {cell.render('Cell')}
                          {
                            cellIndex > 0  && !isSubTable &&
                              <span className="tooltiptext">{cellInfo || rowInfo}</span>
                          }
                        </td>
                      )
                    })}
                  </tr>
                  {row.isExpanded && SubComponent ? (
                    <div>
                      <td style={{ width: tBodyRef.current?.clientWidth - 35 }}>
                        { SubComponent({ row }) }
                      </td>
                    </div>
                  ) : null}
                </>
              )}
          )}
        </tbody>
      </table>
      <S.PaginationContainer>
        <S.PaginationInfoContainer hasActionsBar={hasActionsBar}>
            <S.TotalCount>
              Ընդհանուր { totalCount } գրառում
            </S.TotalCount>
          <S.PaginationActionsContainer>
            <Button onClick={prevPage} className={cx('main', { disable: currentPage === 1})}>
              {'<'}
            </Button>
            { paginationButtons }
            <Button onClick={nextPage} className={cx('main', { disable: currentPage === pageCount})}>
              {'>'}
            </Button>
          </S.PaginationActionsContainer>
        </S.PaginationInfoContainer>
      </S.PaginationContainer>
    </S.TableContainer>
  )
}

Table.defaultProps = {
  data: [],
  columns: [],
  columnConfig: {},
  hasActionsBar: true,
  hasSelections: true,
  title: 'Գործողություններ'
}