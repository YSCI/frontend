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
          {formActionType} օգտատեր   
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
                    errors.surname && touched.surname &&
                      <S.ErrorMessage>
                        { errors.surname }
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
                    errors.username && touched.username &&
                      <S.ErrorMessage>
                        { errors.username }
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
                        errors.password && touched.password &&
                          <S.ErrorMessage>
                            { errors.password }
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