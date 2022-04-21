import React, { useMemo, useEffect } from 'react'

import * as S from './GroupForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select, Checkbox } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './GroupForm.config'
import { FormLabelItem } from 'components/FormLabelItem'
import { Expandable } from 'components/Expandable'

export const GroupForm = ({
  hideModal,
  editGroup,
  createGroup,
  editableData,
  loadProfessions,
  professionsList
}) => {
  useEffect(() => {
    loadProfessions()
  }, [loadProfessions])

  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editGroup(values)
    } else {
      createGroup(values)
    }

    hideModal()
  }

  return (
    <S.GroupFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} խումբ   
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
            const selectedProfession = professionsList.find(prof => prof.id === +values.professionId)

            return (
              <S.FormContentContainer>
                <S.FormRow>
                  <S.FormItem>
                    <Input
                      autoFocus
                      value={values.number}
                      placeholder='Համար'
                      onChange={(val) => setFieldValue('number', val)}
                      onEnter={handleSubmit}
                    />
                    {
                      errors.number && touched.number &&
                        <S.ErrorMessage>
                          { errors.number }
                        </S.ErrorMessage>
                    }
                  </S.FormItem>
                  <S.FormItem>
                    <Select
                      value={selectedProfession ? {
                        value: selectedProfession?.id,
                        label: selectedProfession?.name
                      } : null}
                      options={professionsList.map(prof => ({
                        value: prof.id,
                        label: prof.name
                      }))}
                      placeholder='Մասնագիտություն'
                      onChange={(val) => {
                        setFieldValue('professionId', val?.value)
                        setFieldValue('subjects', [
                          {
                            id: 1,
                            name: 'Ծրագրավորում',
                            year: 1,
                          },
                          {
                            id: 2,
                            name: 'Մաթ. անալիզ',
                            year: 1,
                          },
                          {
                            id: 3,
                            name: 'Քիմիա',
                            year: 3,
                          },
                          {
                            id: 4,
                            name: 'Սոցիոլոգիա',
                            year: 2,
                          },
                          {
                            id: 5,
                            name: 'Գրաֆիկ դիզայն',
                            year: 2,
                          },
                          {
                            id: 6,
                            name: 'Հայոց Պատմություն',
                            year: 4,
                          },
                        ])
                        if (!val) setFieldValue('subjects', [])
                      }}
                    />
                    {
                      errors.professionId && touched.professionId &&
                        <S.ErrorMessage>
                          { errors.professionId }
                        </S.ErrorMessage>
                    }
                  </S.FormItem>
                </S.FormRow>
                {
                  !!values.subjects.length &&
                    <S.FormRow>
                      <FormLabelItem label='Ուս. պլան'>
                        <S.YearsList>
                          {
                            (Array.apply(null, Array(selectedProfession.yearsCount))).map((_, year) => {
                              return (
                                <Expandable title={`${year + 1} Կուրս`} key={year}>
                                  <S.YearContainer>
                                    <S.SemestersHeaderWrapper>
                                      <S.SemestersHeaderContainer>
                                        <div> I Կիսամյակ</div>
                                        <div> II Կիսամյակ</div>
                                      </S.SemestersHeaderContainer>
                                    </S.SemestersHeaderWrapper>
                                    {
                                      values.subjects.filter(subject => subject.year === year + 1).map((subject, index) => {
                                        const subjectIndex = values.subjects.findIndex(el => el.id === subject.id)

                                        return (
                                          <S.SemesterContainer key={subject.id}>
                                            <div>{subject.name}</div>
                                            <S.SemesterCheckboxesContainer>
                                              <Checkbox
                                                checked={subject.firstSemester}
                                                onChange={() => setFieldValue('subjects', [
                                                  ...values.subjects.slice(0, subjectIndex),
                                                  {
                                                    ...subject,
                                                    firstSemester: true
                                                  },
                                                  ...values.subjects.slice(subjectIndex + 1)])}
                                              />
                                              <Checkbox
                                                checked={subject.secondSemester}
                                                onChange={() => setFieldValue('subjects', [
                                                  ...values.subjects.slice(0, subjectIndex),
                                                  {
                                                    ...subject,
                                                    secondSemester: true
                                                  },
                                                  ...values.subjects.slice(subjectIndex + 1)])}
                                              />
                                            </S.SemesterCheckboxesContainer>
                                          </S.SemesterContainer>
                                        )
                                      })
                                    }
                                  </S.YearContainer>
                                </Expandable>
                              )
                            })
                          }
                        </S.YearsList>
                      </FormLabelItem>
                    </S.FormRow>
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
    </S.GroupFormContainer>
  )
}


// I kurs

//                 I kisamyak    II kisamyak
//   Cragravorum
//   Mat Analiz
//   Qimia
  

// II kurs
// III kurs
// IV kurs