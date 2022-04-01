import React, { useMemo } from 'react'

import * as S from './NationalityForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './NationalityForm.config'

export const NationalityForm = ({
  hideModal,
  editNationality,
  createNationality,
  editableNationality
}) => {
  const formActionType = useMemo(() => editableNationality
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableNationality])

  const onSubmit = (values) => {
    if (editableNationality) {
      editNationality(values)
    } else {
      createNationality(values)
    }
  }

  return (
    <S.NationalityFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} ազգություն   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editableNationality || initialValues}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {
            return (
              <S.FormContentContainer>
                <S.FormItem>
                  <Input
                    value={values.name}
                    placeholder='Անվանում'
                    onChange={(val) => setFieldValue('name', val)}
                  />
                  {
                    errors.name && touched.name &&
                      <S.ErrorMessage>
                        { errors.name }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
                <S.ButtonsContainer>
                  <Button className='bordered' onClick={hideModal}>
                    Չեղարկել
                  </Button>
                  <Button onClick={handleSubmit}>
                    Հաստատել
                  </Button>
                </S.ButtonsContainer>
              </S.FormContentContainer>
            )
          }
        }
      </Formik>
    </S.NationalityFormContainer>
  )
}