import React, { useEffect } from 'react'

import * as S from './AssignCommandForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select, DatePicker } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './AssignCommandForm.config'

export const AssignCommandForm = ({
  hideModal,
  studentIds,
  loadCommands,
  commandsList,
  assignCommand,
}) => {
  useEffect(() => {
    loadCommands()
  }, [loadCommands])

  const onSubmit = (values) => {
    assignCommand({
      ...values,
      studentIds
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
            return (
              <S.FormContentContainer>
                <S.FormItemsList>
                  <Input
                    value={values.commandNumber}
                    placeholder='Հրամանի համար'
                    onChange={(val) => setFieldValue('commandNumber', val)}
                    onEnter={handleSubmit}
                    autoFocus
                    error={touched.commandNumber && errors.commandNumber}
                  />
                  <DatePicker
                    date={values.affectDate}
                    placeholder='Հրամանի ամսաթիվ'
                    onChange={(val) => setFieldValue('affectDate', val)}
                    error={touched.affectDate && errors.affectDate}
                  />
                  <Select
                    value={values.selectedCommand}
                    options={commandsList}
                    placeholder='Հրաման'
                    onChange={(val) => {
                      setFieldValue('commandId', val?.value)
                      setFieldValue('selectedCommand', commandsList.find(command => command.id === val?.value))
                    }}
                    error={touched.commandId && errors.commandId}
                  />
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
