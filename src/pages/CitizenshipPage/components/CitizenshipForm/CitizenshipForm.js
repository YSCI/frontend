import React, { useMemo } from 'react'

import * as S from './CitizenshipForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './CitizenshipForm.config'

export const CitizenshipForm = ({
  hideModal,
  editCitizenship,
  createCitizenship,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editCitizenship(values)
    } else {
      createCitizenship(values)
    }

    hideModal()
  }

  return (
    <S.CitizenshipFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} քաղաքացիություն   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
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
                    value={values.country}
                    placeholder='Երկիր'
                    onChange={(val) => setFieldValue('country', val)}
                    onEnter={handleSubmit}
                    autoFocus
                  />
                  {
                    errors.country && touched.country &&
                      <S.ErrorMessage>
                        { errors.country }
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
    </S.CitizenshipFormContainer>
  )
}