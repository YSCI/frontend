import React, { useEffect, useMemo } from 'react'

import * as S from './CommandForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './CommandForm.config'
import { FieldsForm } from '../FieldsForm'

export const CommandForm = (props) => {
  const {
    hideModal,
    editCommand,
    createCommand,
    editableData,
    loadStatuses,
    showModal,
    statuses,
    formValues,
    changeableFields
  } = props

  useEffect(() => {
    loadStatuses()
  }, [loadStatuses])

  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    console.log('here')
    if (editableData) {
      editCommand({ ...values, changeableColumns: changeableFields})
    } else {
      createCommand({ ...values, changeableColumns: changeableFields})
    }
    hideModal()
  }
  console.log({ formValues, changeableFields })
  return (
    <S.CommandFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} հրաման
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={formValues || editableData || initialValues}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {
            const selectedStatus = statuses.list.find(status => status.id === values.changeableStatusId)

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
                  {/* <Select
                    value={selectedStatus ? {
                      value: selectedStatus.id,
                      label: selectedStatus.name
                    } : null}
                    options={statuses.list.map(status => ({
                      value: status.id,
                      label: status.name
                    }))}
                    placeholder='Փոփոխելի կարգավիճակ'
                    onChange={(val) => {
                      setFieldValue('status', statuses.list.find(status => status.id === val.value))
                      setFieldValue('changeableStatusId', val.value)
                    }}

                  />
                  {
                    errors.changeableStatusId && touched.changeableStatusId &&
                      <S.ErrorMessage>
                        { errors.changeableStatusId }
                      </S.ErrorMessage>
                  } */}
                  <Button onClick={() => showModal(FieldsForm, { commandFormProps: props, editableData: editableData?.changeableColumns })}>
                    Փոփոխելի դաշտեր
                  </Button>
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
    </S.CommandFormContainer>
  )
}