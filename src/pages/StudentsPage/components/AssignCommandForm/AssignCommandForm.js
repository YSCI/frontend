import React from 'react'

import * as S from './AssignCommandForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './AssignCommandForm.config'

export const AssignCommandForm = ({
  hideModal,
  commandsList,
  assignCommand,
  studentId
}) => {
  const onSubmit = (values) => {
    assignCommand({
      ...values,
      studentId
    })
    hideModal()
  }

  return (
    <S.AssignCommandFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Կցագրել հրաման
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {
            const selectedCommand = commandsList.find(command => command.id === values.commandId)

            return (
              <S.FormContentContainer>
                <S.FormItemsList>
                  <S.FormItem>
                    <Input
                        value={values.commandNumber}
                        placeholder='Հրամանի համար'
                        onChange={(val) => setFieldValue('commandNumber', val)}
                      />
                    <Select
                      value={selectedCommand ? {
                        value: selectedCommand?.id,
                        label: selectedCommand?.name
                      } : null}
                      options={commandsList.map(citizenship => ({
                        value: citizenship.id,
                        label: citizenship.name
                      }))}
                      placeholder='Հրաման'
                      onChange={(val) => setFieldValue('commandId', val.value)}
                    />
                    {
                      errors.commandId && touched.commandId &&
                        <S.ErrorMessage>
                          { errors.commandId }
                        </S.ErrorMessage>
                    }
                  </S.FormItem>
                </S.FormItemsList>
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
    </S.AssignCommandFormContainer>
  )
}