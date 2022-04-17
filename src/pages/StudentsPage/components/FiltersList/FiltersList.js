import React from 'react'
import { Button, Input, Select } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { Filter } from 'components'
import { useSearchParams } from 'hooks/useSearchParams'

export const FiltersList = ({ loadStudents, hideModal }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  const search = (values) => {
    loadStudents(values)
    hideModal()
    updateSearchParams(values)
  }

  return (
    <Filter>
      <Formik
        onSubmit={search}
        initialValues={searchParams || initialValues}
      >
        {
          ({
            values,
            resetForm,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <S.FiltersListContainer className='FiltersListContainer'>
                <S.List>
                  <Input
                    value={values.firstname}
                    placeholder='Անուն'
                    onChange={(val) => setFieldValue('firstname', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.lastname}
                    placeholder='Ազգանուն'
                    onChange={(val) => setFieldValue('lastname', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.fathername}
                    placeholder='Հայրանուն'
                    onChange={(val) => setFieldValue('fathername', val)}
                    onEnter={handleSubmit}
                  />
                 <Input
                    value={values.registrationAddress}
                    placeholder='Գրանցման հասցե'
                    onChange={(val) => setFieldValue('registrationAddress', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.residentAddress}
                    placeholder='Բնակության հասցե'
                    onChange={(val) => setFieldValue('residentAddress', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.acceptanceCommandNumber}
                    placeholder='Ընդունման հրամանի համար'
                    onChange={(val) => setFieldValue('acceptanceCommandNumber', val)}
                    onEnter={handleSubmit}
                  /> 
                  <Input
                    value={values.currentCourse}
                    placeholder='Ընթացիկ կուրս'
                    onChange={(val) => setFieldValue('currentCourse', val)}
                    onEnter={handleSubmit}
                  /> 
                  <Input
                    value={values.currentGroup}
                    placeholder='Ընթացիկ խումբ'
                    onChange={(val) => setFieldValue('currentGroup', val)}
                    onEnter={handleSubmit}
                  /> 
                </S.List>
                <S.ActionsContainer>
                  <Button className='bordered' onClick={() => {
                    resetForm()
                    search()
                  }}>
                    Մաքրել
                  </Button>
                  <Button onClick={handleSubmit}>
                    Փնտրել
                  </Button>
                </S.ActionsContainer>
              </S.FiltersListContainer>
            )
          }
        }
      </Formik>
    </Filter>
  )
}