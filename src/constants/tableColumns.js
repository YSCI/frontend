export const tableColumns = {
  students: [
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
  ]
}