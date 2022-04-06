import { withConfirmation } from "helpers"

export const tableColumns = {
  students: ({ onEdit, onDelete }) => ([
    {
      Header: 'Անուն',
      accessor: 'firstname'
    },
    {
      Header: 'Ազգանուն',
      accessor: 'lastname'
    },
    {
      Header: 'Հայրանուն',
      accessor: 'fathername'
    },
    {
      Header: 'Ծննդյան ամսաթիվ',
      accessor: 'dateOfBirth'
    },
    {
      Header: 'Գրանցման հասցե',
      accessor: 'registrationAddress'
    },
    {
      Header: 'Բնակության հասցե',
      accessor: 'residentAddress'
    },
    {
      Header: 'Հեռախոսահամարներ',
      accessor: 'contactNumbers[0]'
    },
    {
      Header: 'Ընդունման ամսաթիվ',
      accessor: 'dateOfAcceptance'
    },
    {
      Header: 'Ընդունման հրամանի համար',
      accessor: 'acceptanceCommandNumber'
    },
    {
      Header: 'Ընթացիկ կուրս',
      accessor: 'currentCourse'
    },
    {
      Header: 'Ընթացիկ խումբ',
      accessor: 'currentGroup'
    },
    {
      Header: 'Քաղաքացիություն',
      accessor: 'citizenship.country'
    },
    {
      Header: 'Ազգություն',
      accessor: 'nationality.name'
    },
    {
      Header: 'Մասնագիտություն',
      accessor: 'profession.name'
    },
    {
      Header: 'Առողջական վիճակ',
      accessor: 'healthStatus.status'
    },
    {
      Header: 'Կարգավիճակ',
      accessor: 'status.name'
    },
    {
      Header: 'Կոմիսարիատ',
      accessor: 'commissariat.name'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
            Ջնջել
          </div>
        </div>
      )
    },
  ]),
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
      Header: 'Վճար',
      accessor: 'fee'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
      Header: 'Նկարագրություն',
      accessor: 'description'
    },
    {
      id: 'actions', 
      Cell: ({ row: { original } }) => (
        <div>
          <div onClick={() => onEdit(original)}>
            Փոփոխել
          </div>
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
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
          <div onClick={() => withConfirmation({ onYes: () => onDelete(original.id) })}>
            Ջնջել
          </div>
        </div>
      )
    },
  ])
}