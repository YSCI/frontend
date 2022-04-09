import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'

export const FiltersList = ({ loadUsers }) => {
  const search = (values) => {
    loadUsers(values)
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
                    placeholder='Անուն'
                    onChange={(val) => setFieldValue('name', val)}
                  />
                  <Input
                    value={values.surname}
                    placeholder='Ազգանուն'
                    onChange={(val) => setFieldValue('surname', val)}
                  />
                  <Input
                    value={values.username}
                    placeholder='Մուտքանուն'
                    onChange={(val) => setFieldValue('username', val)}
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