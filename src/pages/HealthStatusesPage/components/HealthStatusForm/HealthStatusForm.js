import React, { useMemo } from 'react'

import * as S from './HealthStatusForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './HealthStatusForm.config'

export const HealthStatusForm = ({
  hideModal,
  editHealthStatus,
  createHealthStatus,
  editableHealthStatus
}) => {
  const formActionType = useMemo(() => editableHealthStatus
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableHealthStatus])

  const onSubmit = (values) => {
    if (editableHealthStatus) {
      editHealthStatus(values)
    } else {
      createHealthStatus(values)
    }
  }

  return (
    <S.HealthStatusFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} առողջական վիճակ   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editableHealthStatus || initialValues}
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
                    value={values.status}
                    placeholder='Անվանում'
                    onChange={(val) => setFieldValue('status', val)}
                  />
                  {
                    errors.status && touched.status &&
                      <S.ErrorMessage>
                        { errors.status }
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
    </S.HealthStatusFormContainer>
  )
}