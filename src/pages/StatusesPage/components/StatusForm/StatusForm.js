import React, { useMemo } from 'react'

import * as S from './StatusForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './StatusForm.config'

export const StatusForm = ({
  hideModal,
  editStatus,
  createStatus,
  editableStatus
}) => {
  const formActionType = useMemo(() => editableStatus
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableStatus])

  const onSubmit = (values) => {
    if (editableStatus) {
      editStatus(values)
    } else {
      createStatus(values)
    }
  }

  return (
    <S.StatusFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} կարգավիճակ   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editableStatus || initialValues}
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
    </S.StatusFormContainer>
  )
}