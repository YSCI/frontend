import React, { useMemo, useEffect } from 'react'
import { Formik } from 'formik'

import * as S from './GroupForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select, Checkbox } from 'ui'
import { initialValues, validationSchema } from './GroupForm.config'
import { FormLabelItem } from 'components/FormLabelItem'
import { createArrayOfLength } from 'helpers/createArrayOfLength'

export const GroupForm = ({
  hideModal,
  editGroup,
  createGroup,
  editableData,
  professionsList,
  loadProfessionSubjects
}) => {
  useEffect(() => {
    if (editableData?.professionId) {
      loadProfessionSubjects(editableData?.professionId)
    }
  }, [editableData?.professionId])

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

  const loadSubjectfOfProfession = async (profId, setFieldValue) => {
    const subjects = await loadProfessionSubjects(profId)
    const curriculum = []

    subjects.forEach(subject => {
      curriculum.push({
        subjectId: subject.id,
        semesters: subject.semesters || []
      })
    })

    setFieldValue('curriculum', curriculum)
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
                    <Input
                      placeholder='Ստեղծման տարեթիվ'
                      value={values.openedAt}
                      onChange={openedAt => setFieldValue('openedAt', openedAt)}
                    />
                    {
                      errors.openedAt && touched.openedAt &&
                        <S.ErrorMessage>
                          { errors.openedAt }
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
                        const profId = val?.value
                        setFieldValue('professionId', profId)
                        
                        if (profId) {
                          loadSubjectfOfProfession(profId, setFieldValue)
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
                            (createArrayOfLength(selectedProfession.yearsCount)).map((year) => {
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
                              selectedProfession.subjects.map((subject, position) => {
                                return (
                                  <S.ProfessionSubjectItem>
                                    <S.SubjectName>
                                      { position + 1 }) { subject.name }
                                    </S.SubjectName>
                                    <S.CheckboxesContainer>
                                     {
                                        createArrayOfLength(selectedProfession.yearsCount * 2).map(semester => {
                                          const curriculumList = values.curriculum?.slice() || []

                                          return (
                                            <S.CheckboxWrapper>
                                              <Checkbox
                                                checked={curriculumList.find(curr => curr.subjectId === subject.id)?.semesters.includes(semester)}
                                                onClick={(() => {
                                                  const subjectIndex = curriculumList.findIndex(curriculum => curriculum.subjectId === subject.id)
                                                  // REFACTOR
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
