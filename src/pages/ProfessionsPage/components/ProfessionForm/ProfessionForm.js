import React, { useMemo } from 'react'

import * as S from './ProfessionForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './ProfessionForm.config'

export const ProfessionForm = ({
  hideModal,
  editProfession,
  createProfession,
  editableProfession
}) => {
  const formActionType = useMemo(() => editableProfession
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableProfession])

  const onSubmit = (values) => {
    if (editableProfession) {
      editProfession({
        ...values,
        number: +values.number
      })
    } else {
      createProfession(values)
    }
    hideModal()
  }

  return (
    <S.ProfessionFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} մասնագիտություն   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editableProfession || initialValues}
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
                <S.FormItem>
                  <Input
                    value={values.abbreviation}
                    placeholder='Հապավում'
                    onChange={(val) => setFieldValue('abbreviation', val)}
                  />
                  {
                    errors.abbreviation && touched.abbreviation &&
                      <S.ErrorMessage>
                        { errors.abbreviation }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
                <S.FormItem>
                  <Input
                    value={values.code}
                    placeholder='Կոդ'
                    onChange={(val) => setFieldValue('code', val)}
                  />
                  {
                    errors.code && touched.code &&
                      <S.ErrorMessage>
                        { errors.code }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
                <S.FormItem>
                  <Input
                    value={values.yearsCount}
                    placeholder='Տարիների քանակ'
                    onChange={(val) => setFieldValue('yearsCount', val)}
                  />
                  {
                    errors.yearsCount && touched.yearsCount &&
                      <S.ErrorMessage>
                        { errors.yearsCount }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
                <S.FormItem>
                  <Input
                    value={values.number}
                    placeholder='Համար'
                    onChange={(val) => setFieldValue('number', val)}
                  />
                  {
                    errors.number && touched.number &&
                      <S.ErrorMessage>
                        { errors.number }
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
    </S.ProfessionFormContainer>
  )
}