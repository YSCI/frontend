import React, { useMemo } from 'react'

import * as S from './PrivilegeForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './PrivilegeForm.config'

export const PrivilegeForm = ({
  hideModal,
  editPrivilege,
  createPrivilege,
  editablePrivilege
}) => {
  const formActionType = useMemo(() => editablePrivilege
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editablePrivilege])

  const onSubmit = (values) => {
    if (editablePrivilege) {
      editPrivilege(values)
    } else {
      createPrivilege(values)
    }
  }

  return (
    <S.PrivilegeFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} արտոնություն   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editablePrivilege || initialValues}
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
    </S.PrivilegeFormContainer>
  )
}