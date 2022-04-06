import React, { useEffect, useMemo } from 'react'

import * as S from './CommissariatForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './CommissariatForm.config'

export const CommissariatForm = ({
  hideModal,
  editCommissariat,
  createCommissariat,
  editableCommissariat,
  loadCommunities,
  communities
}) => {
  useEffect(() => {
    loadCommunities()
  }, [loadCommunities])

  const formActionType = useMemo(() => editableCommissariat
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableCommissariat])

  const onSubmit = (values) => {
    if (editableCommissariat) {
      editCommissariat(values)
    } else {
      createCommissariat(values)
    }
    hideModal()
  }

  return (
    <S.CommissariatsFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} կոմիսարիատ   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editableCommissariat || initialValues}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {
            console.log({ errors, values, communities })
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
                    value={values.number}
                    placeholder='Համար'
                    type='number'
                    onChange={(val) => setFieldValue('number', val)}
                  />
                  {
                    errors.number && touched.number &&
                      <S.ErrorMessage>
                        { errors.number }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
                <S.FormItem>
                <Input
                    value={values.description}
                    placeholder='Նկարագրություն'
                    type='description'
                    onChange={(val) => setFieldValue('description', val)}
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
    </S.CommissariatsFormContainer>
  )
}


