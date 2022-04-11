import React, { useEffect, useMemo } from 'react'

import * as S from './CommunityForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './CommunityForm.config'

export const CommunityForm = ({
  hideModal,
  editCommunity,
  createCommunity,
  editableData,
  loadRegions,
  regions
}) => {
  useEffect(() => {
    loadRegions()
  }, [loadRegions])

  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editCommunity(values)
    } else {
      createCommunity(values)
    }
    hideModal()
  }

  return (
    <S.CommunityFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} համայնք
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
            const selectedRegion = regions.list.find(region => region.id === values.regionId)

            return (
              <S.FormContentContainer>
                <S.FormItem>
                  <Input
                    value={values.name}
                    placeholder='Անվանում'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
                  />
                  {
                    errors.name && touched.name &&
                      <S.ErrorMessage>
                        { errors.name }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
                <S.FormItem>
                  <Select
                    value={selectedRegion ? {
                      value: selectedRegion?.id,
                      label: selectedRegion?.name
                    } : null}
                    options={regions.list.map(region => ({
                      value: region.id,
                      label: region.name
                    }))}
                    placeholder='Մարզ'
                    onChange={(val) => {
                      setFieldValue('region', regions.list.find(region => region.id === val.value))
                      setFieldValue('regionId', val.value)
                    }}
                  />
                  {
                    errors.regionId && touched.regionId &&
                      <S.ErrorMessage>
                        { errors.regionId }
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
    </S.CommunityFormContainer>
  )
}