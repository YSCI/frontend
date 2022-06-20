import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

import closeIcon from 'images/close.png'
import * as S from './RotationForm.styles'
import { Button, Select, Checkbox } from 'ui'
import { initialValues, validationSchema } from './RotationForm.config'
import { createArrayOfLength } from 'helpers/createArrayOfLength'
import { HttpService } from 'services'
import { Table } from 'components'
import { tableColumns } from 'constants/tableColumns'

export const RotationForm = ({
    hideModal,
    formValues,
    loadProfessions,
    professionsList,
    getRotationStudensList
}) => {
  const [rotationStudents, setRotationStudents] = useState(null)

  useEffect(() => {
    loadProfessions()
  }, [loadProfessions])

  const onSubmit = async (values) => {
    const data = await HttpService.get('rotation', values)
    
    setRotationStudents(data)
  }

  return (
    <S.RotationFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Ռոտացիա
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        initialValues={formValues || initialValues}
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
            const selectedProfession = professionsList.find(el => el.id === values.professionId)

            return (
              <S.FormContentContainer>
                <S.FormItemsList>
                  <Select
                    value={selectedProfession}
                    accessorKey='abbreviation'
                    options={professionsList}
                    placeholder='Մասնագիտություն'
                    onChange={(val) => {
                      setFieldValue('professionId', val?.value)
                    }}
                    error={touched.professionId && errors.professionId}
                  />
                  <Select
                    value={values.studentSemesters[1] ? values.studentSemesters[1]  / 2 : null}
                    options={createArrayOfLength(selectedProfession?.yearsCount)}
                    placeholder='Կուրս'
                    onChange={(val) => {
                      setFieldValue('studentSemesters', [val?.value * 2 - 1, val?.value * 2])
                    }}
                    error={touched.studentSemesters && errors.studentSemesters}
                  />
                  <S.SemestersList>
                    <S.SemestersTitle>
                      Կիսամյակներ
                    </S.SemestersTitle>
                    <S.SemesterItems>
                      {
                        createArrayOfLength(selectedProfession?.yearsCount * 2).map(el => {
                          return (
                            <S.SemesterItem key={el}>
                              <div>{ el }</div>
                              <Checkbox
                                checked={values.semestersForCalculation.includes(el)}
                                onChange={(checked) => {
                                  setFieldValue('semestersForCalculation', checked
                                    ? values.semestersForCalculation.concat(el)
                                    : values.semestersForCalculation.filter(item => item !== el)
                                  )
                                }}
                              />
                            </S.SemesterItem>
                          )
                        })
                      }
                    </S.SemesterItems>
                  </S.SemestersList>
                  {/* <Input
                    placeholder='Կիսամյակներ'
                    value={values.semesters}
                    onChange={(val) => setFieldValue('semesters', val)}
                    error={touched.semesters && errors.semesters}
                  /> */}
                </S.FormItemsList>
                {
                  rotationStudents &&
                    <Table
                      data={rotationStudents.data}
                      columns={tableColumns.rotationStudents}
                    />
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
    </S.RotationFormContainer>
  )
}
