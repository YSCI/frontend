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
  professionsList,
  loadProfessionSubjects
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
  console.log({ professionsList })
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
            console.log({ selectedProfession, professionsList })
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
                        label: selectedProfession?.abbreviation
                      } : null}
                      options={professionsList.map(prof => ({
                        value: prof.id,
                        label: prof.abbreviation
                      }))}
                      placeholder='Մասնագիտություն'
                      onChange={(val) => {
                        setFieldValue('professionId', val?.value)
                        if (val?.value) {
                          loadProfessionSubjects(val?.value)
                        }
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
                  !!selectedProfession?.subjects.length &&
                    <S.FormRow>
                      <FormLabelItem label='Ուս. պլան'>
                        <S.CurriculumContainer>
                          <S.CurriculumContainerHeader>
                          {
                            (Array.apply(null, Array(selectedProfession.yearsCount))).map((_, index) => {
                              const year = index + 1

                              return (
                                <S.YearContainer>
                                  <S.Course>
                                    { year } Կուրս
                                  </S.Course>
                                  <S.SemestersHeaderWrapper>
                                    <S.SemestersHeaderContainer>
                                      <div> I Կիս.</div>
                                      <div> II Կիս.</div>
                                    </S.SemestersHeaderContainer>
                                  </S.SemestersHeaderWrapper>
                                </S.YearContainer>
                              )
                            })
                          }
                          </S.CurriculumContainerHeader>
                          <S.ProfessionSubjectsSelection>
                            {
                              selectedProfession.subjects.map(subject => {
                                return (
                                  <S.ProfessionSubjectItem>
                                    <S.SubjectName>
                                      { subject.name }
                                    </S.SubjectName>
                                    <S.CheckboxesContainer>
                                     {
                                        Array.apply(null, Array(selectedProfession.yearsCount * 2)).map((_, index) => {
                                          const semester = index + 1
                                          console.log(values)
                                          const curriculumList = values.curriculum.slice()
                                          console.log({ current: curriculumList.find(curr => curr.subjectId === subject.id) }, 'current')
                                          return (
                                            <S.CheckboxWrapper>
                                              <Checkbox
                                                
                                                checked={values.curriculum.find(curr => curr.subjectId === subject.id)?.semesters.includes(semester)}
                                                onClick={((isChecked) => {
                                                  const subjectIndex = curriculumList.findIndex(curriculum => curriculum.subjectId === subject.id)
                                                  console.log({subjectIndex},'afdfdf')
                                                  if (subjectIndex !== -1) {
                                                    if (curriculumList[subjectIndex].semesters?.length) {
                                                      const semesterIndex = curriculumList[subjectIndex].semesters.findIndex(sem => sem === semester)
                                                      if (semesterIndex !== -1) {
                                                        curriculumList[subjectIndex].semesters.splice(semesterIndex, 1)
                                                      } else {
                                                        curriculumList[subjectIndex].semesters = curriculumList[subjectIndex].semesters.concat(semester).sort()
                                                      }
                                                    }
                                                    
                                                  } else {
                                                    curriculumList.push({
                                                      subjectId: subject.id,
                                                      semesters: [semester]
                                                    })
                                                  }
                                                  setFieldValue('curriculum', curriculumList)
                                                })}
                                              />
                                            </S.CheckboxWrapper>
                                          )
                                        })
                                      }
                                    </S.CheckboxesContainer>
                                  </S.ProfessionSubjectItem>
                                )
                              })
                            }
                          </S.ProfessionSubjectsSelection>
                        </S.CurriculumContainer>
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