import React, { useMemo } from 'react'

import * as S from './UserForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, getValidationSchema } from './UserForm.config'

export const UserForm = ({
  editUser,
  hideModal,
  createUser,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editUser({
        ...values
      })
    } else {
      createUser(values)
    }
    hideModal()
  }

  return (
    <S.UserFormContainer>
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
        validationSchema={getValidationSchema(editableData)}
        initialValues={editableData || initialValues}
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
                    placeholder='Անուն'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
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
                    value={values.surname}
                    placeholder='Ազգանուն'
                    onChange={(val) => setFieldValue('surname', val)}
                    onEnter={handleSubmit}
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
                    value={values.username}
                    placeholder='Մուտքանուն'
                    onChange={(val) => setFieldValue('username', val)}
                    onEnter={handleSubmit}
                  />
                  {
                    errors.code && touched.code &&
                      <S.ErrorMessage>
                        { errors.code }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
                {
                  !editableData &&
                    <S.FormItem>
                      <Input
                        type='password'
                        value={values.password}
                        placeholder='Գաղտնաբառ'
                        onChange={(val) => setFieldValue('password', val)}
                        onEnter={handleSubmit}
                      />
                      {
                        errors.yearsCount && touched.yearsCount &&
                          <S.ErrorMessage>
                            { errors.yearsCount }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                }
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
    </S.UserFormContainer>
  )
}