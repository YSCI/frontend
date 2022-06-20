import moment from 'moment'

import { StudentProfileLink } from 'components'
import store from 'redux/store'
import { Checkbox } from 'ui'
import { editSubject } from 'redux/actions/professions'
import { educationStatuses } from './educationStatuses'

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
  groups: [
    {
      Header: 'Համար',
      accessor: 'number'
    },
    {
      Header: 'Ստեղծման տարեթիվ',
      accessor: 'openedAt'
    },
    {
      Header: 'Մասնագիտություն',
      accessor: 'profession.abbreviation'
    },
    {
      Header: 'Ընթացիկ կուրս',
      accessor: 'currentSemester'
    },
    {
      Header: 'Վճար',
      accessor: 'fee'
    },
    {
      Header: 'Անվճար տեղերի քանակ',
      accessor: 'freePlacesCount'
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
      accessor: ({ dateOfBirth }) => moment(dateOfBirth).format('DD/MM/YYYY')
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
      accessor: ({ dateOfAcceptance }) => moment(dateOfAcceptance).format('DD/MM/YYYY')
    },
    {
      Header: 'Ընդունման հրամանի համար',
      accessor: 'acceptanceCommandNumber'
    },
    {
      Header: 'Խումբ',
      accessor: 'group.number'
    },
    {
      Header: 'Ընթացիկ կուրս',
      accessor: 'currentSemester'
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
      Header: 'Առողջական վիճակ',
      accessor: 'healthStatus.status'
    },
    {
      Header: 'Կարգավիճակ',
      accessor: 'status.name',
      width: 350
    },
    {
      Header: 'Զինկոմիսարիատ',
      accessor: 'commissariat.name'
    },
    {
      Header: 'Անձը հաստատող փաստաթուղթ',
      accessor: 'socialCardNumber'
    }
  ],
  rotationStudents: [
    {
      Header: 'Անուն',
      accessor: 'firstname'
    },
    {
      Header: 'Ազգանուն',
      accessor: 'lastname'
    },
    {
      Header: 'Ուսման ձև',
      accessor: row => educationStatuses.find(status => status.value === row.educationStatus)?.label
    }
  ],
  subjects: (yearsCount) => {
    const arr = [
      {
        Header: ' ',
        width: 80,
        accessor: (row) => row.number || '-'
      },
      {
        Header: 'Անվանում',
        accessor: 'name'
      }
    ]

    for (let year = 1; year <= yearsCount * 2; year++) {
      arr.push({
        Header: `${year} կիս.`,
        onClick: (subject) => {
          const semesters = subject.semesters?.includes(year)
            ? subject.semesters.filter(semester => semester !== year)
            : Array.isArray(subject.semesters) ? subject.semesters.concat(year) : [year]

          store.dispatch(editSubject({
            semesters: semesters.length ? semesters : null,
            id: subject.id,
            professionId: subject.professionId
          }, false))
        },

        accessor: ({ semesters }) => {
          return (
            <Checkbox
              checked={semesters?.includes(year)}
            />
          )
        },
        width: 125
      })
    }

    return arr
  },
  profession: [
    {
      Header: 'Անվանում',
      accessor: 'name',
      width: 400
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
      Header: 'Անվճար տեղերի քանակ',
      accessor: 'freePlacesCount'
    },
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
      Header: 'Փոփոխելի դաշտեր',
      accessor: ({ changeableColumns = {} }) => Object.keys(changeableColumns || {})
        .map(column => tableColumns.students.find(el => el.accessor.split?.('.')[0] === column.replaceAll('Id', ''))?.Header)
        .filter(el => el)
        .join(', ')
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
    {
      Header: 'Կցագրող',
      accessor: ({ user }) => `${user.name} ${user.surname}`
    },
    {
      Header: 'Կցագրման ամսաթիվ',
      accessor: ({ affectDate }) => moment(affectDate).format('DD/MM/YYYY')
    }
  ]
}