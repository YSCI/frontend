import React, { useMemo, useEffect, useState } from 'react'
import { Formik } from 'formik'

import * as S from './RateForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select, Checkbox } from 'ui'
import { initialValues } from './RateForm.config'
import { FormLabelItem } from 'components/FormLabelItem'
import { createArrayOfLength } from 'helpers/createArrayOfLength'
import { HttpService } from 'services'
import { toast } from 'react-toastify'

export const RateForm = ({
  student,
  hideModal,
  editGroup,
  editableData,
  professionsList,
  loadProfessionSubjects
}) => {
  const [subjects, setSubjects] = useState([])
  const [curriculum, setCurriculum] = useState([])

  const loadCurriculum = async () => {
    try {
      const { curriculum } = await HttpService.get(`group/${student.group.id}`)

      setCurriculum(curriculum)
      console.log(curriculum)
    } catch (ex) {
      toast.error(`Առաջացավ խնդիր: ${ex.message}`)
    }
  }

  const loadSubjectsOfProfession = async () => {
    const subjects = await loadProfessionSubjects({ professionId: student.profession.id })
    console.log({subjects})
    setSubjects(subjects)
  }

  useEffect(() => {
    loadCurriculum()
    loadSubjectsOfProfession()
  }, [])

  console.log(student)
  const onSubmit = (values) => {
    console.log({values})
  }

  // const loadSubjectsOfProfession = async (profId, setFieldValue) => {
  //   const subjects = await loadProfessionSubjects(profId)
  //   const curriculum = []

  //   subjects.forEach(subject => {
  //     curriculum.push({
  //       subjectId: subject.id,
  //       semesters: subject.semesters || []
  //     })
  //   })

  //   setFieldValue('curriculum', curriculum)
  // }

  console.log({student})
  console.log({ subjects, curriculum })
  return (
    <S.RateFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Գնահատել ուսանողին - { student.firstname + ' ' + student.lastname }
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
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
                <S.FormRow>
                  <FormLabelItem label='Գնահատականներ'>
                    <S.CurriculumContainer>
                      <S.CurriculumContainerHeader>
                      {
                        (createArrayOfLength(student.profession.yearsCount)).map((year) => {
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
                          subjects.map((subject, position) => {
                            return (
                              <S.ProfessionSubjectItem>
                                <S.SubjectName title={subject.name}>
                                  { position + 1 }) { subject.name }
                                </S.SubjectName>
                                <S.CheckboxesContainer>
                                  {
                                    createArrayOfLength(student.profession.yearsCount * 2).map(semester => {
                                      console.log('cond', semester === 1 && position === 0, subject)
                                      return (
                                        <S.InputWrapper>
                                          <Input
                                            maxLength={2}
                                            disabled={!(curriculum.find(curr => curr.subjectId === subject.id)?.semesters?.includes(semester))}
                                          />
                                          {/* <Checkbox
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
                                          /> */}
                                        </S.InputWrapper>
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
    </S.RateFormContainer>
  )
}
