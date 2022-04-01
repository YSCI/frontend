import React, { useMemo } from 'react'

import * as S from './RegionForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './RegionForm.config'

export const RegionForm = ({
  hideModal,
  editRegion,
  createRegion,
  editableRegion
}) => {
  const formActionType = useMemo(() => editableRegion
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableRegion])

  const onSubmit = (values) => {
    if (editableRegion) {
      editRegion(values)
    } else {
      createRegion(values)
    }
  }

  return (
    <S.RegionFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} մարզ   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editableRegion || initialValues}
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
    </S.RegionFormContainer>
  )
}