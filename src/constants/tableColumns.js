import moment from 'moment'

import { StudentProfileLink } from 'components'

export const tableColumns = {
  users: [
    {
      Header: 'Անուն',
      accessor: 'name'
    },
    {
      Header: 'Ազգանուն',
      accessor: 'surname'
    },
    {
      Header: 'Մուտքանուն',
      accessor: 'username'
    }
  ],
  students: [
    {
      Header: 'Անձնական էջ',
      accessor: (student) => <StudentProfileLink student={student}/>
    },
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
      accessor: ({ dateOfBirth }) => moment(dateOfBirth).format('DD/MM/YYYY HH:MM')
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
      accessor: ({ dateOfAcceptance }) => moment(dateOfAcceptance).format('DD/MM/YYYY HH:MM')
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
      Header: 'Զինկոմիսարիատ',
      accessor: 'commissariat.name'
    }
  ],
  profession: [
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
    }
  ],
  citizenship: [
    {
      Header: 'Երկիր',
      accessor: 'country'
    }
  ],
  healthStatus: [
    {
      Header: 'Անվանում',
      accessor: 'status'
    }
  ],
  status: [
    {
      Header: 'Անվանում',
      accessor: 'name'
    }
  ],
  region: [
    {
      Header: 'Անվանում',
      accessor: 'name'
    }
  ],
  nationality: [
    {
      Header: 'Անվանում',
      accessor: 'name'
    }
  ],
  privilege: [
    {
      Header: 'Անվանում',
      accessor: 'name'
    }
  ],
  commissariat: [
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
    }
  ],
  community: [
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      Header: 'Մարզ',
      accessor: 'region.name'
    }
  ],
  commands: [
    {
      Header: 'Անվանում',
      accessor: 'name'
    },
    {
      Header: 'Փոփոխելի կարգավիճակ',
      accessor: 'status.name'
    }
  ],
  commandHistory: [
    {
      Header: 'Հրամանի համար',
      accessor: 'commandNumber'
    },
    {
      Header: 'Հրամանի անվանում',
      accessor: 'command.name'
    },
  ]
}