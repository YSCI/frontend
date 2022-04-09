import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'

export const FiltersList = ({ loadProfessions }) => {
  const search = (values) => {
    loadProfessions(values)
  }

  return (
      <Formik
        initialValues={initialValues}
        onSubmit={search}
      >
        {
          ({
            values,
            resetForm,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <S.FiltersListContainer>
                <S.List>
                  <Input
                    value={values.name}
                    placeholder='Մասնագիտություն'
                    onChange={(val) => setFieldValue('name', val)}
                  />
                  <Input
                    value={values.abbreviation}
                    placeholder='Հապավում'
                    onChange={(val) => setFieldValue('abbreviation', val)}
                  />
                  <Input
                    value={values.fee}
                    placeholder='Վճար'
                    onChange={(val) => setFieldValue('fee', val)}
                  />
                  <Input
                    value={values.code}
                    placeholder='Կոդ'
                    onChange={(val) => setFieldValue('code', val)}
                  />
                  <Input
                    value={values.number}
                    placeholder='Համար'
                    onChange={(val) => setFieldValue('number', val)}
                  />
                  <Input
                    value={values.yearsCount}
                    placeholder='Տարիների քանակ'
                    onChange={(val) => setFieldValue('yearsCount', val)}
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
  )
}