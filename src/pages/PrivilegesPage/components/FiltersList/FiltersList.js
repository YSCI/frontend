import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'

export const FiltersList = ({ loadPrivileges }) => {
  const search = (values) => {
    loadPrivileges(values)
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
                    placeholder='Արտոնություն'
                    onChange={(val) => setFieldValue('name', val)}
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
  )
}