export const tableColumns = {
  profession: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      Header: 'Կոդ',
      accessor: 'code'
    },
    {
      Header: 'Հապավում',
      accessor: 'abbreviation'
    },
    {
      Header: 'Տարիների քանակ',
      accessor: 'yearsCount'
    },
    {
      Header: 'Համար',
      accessor: 'number'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  citizenship: ({ onEdit, onDelete }) => ([
    {
      Header: 'Երկիր',
      accessor: 'country'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  healthStatus: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'status'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  status: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  region: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  nationality: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  privilege: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  commissariat: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      Header: 'Համար',
      accessor: 'number'
    },
    {
      Header: 'Համայնք',
      accessor: 'community.name'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
  community: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      Header: 'Մարզ',
      accessor: 'region.name'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => onDelete(original.id)}>
            Ջնջել
          </div>
        </div>
      )
    },
  ])
}