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
  editableCommunity,
  loadRegions,
  regions
}) => {
  useEffect(() => {
    loadRegions()
  }, [loadRegions])

  const formActionType = useMemo(() => editableCommunity
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableCommunity])

  const onSubmit = (values) => {
    if (editableCommunity) {
      editCommunity(values)
    } else {
      createCommunity(values)
    }
  }
  console.log({ regions })
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
        initialValues={editableCommunity || initialValues}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {
            console.log({ values })
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
                  <Select
                    // value={values.regionId}
                    options={regions.list.map(region => ({
                      value: region.id,
                      label: region.name
                    }))}
                    placeholder='Մարզ'
                    onChange={(val) => setFieldValue('regionId', val.value)}
                  />
                  {
                    errors.communityId && touched.communityId &&
                      <S.ErrorMessage>
                        { errors.communityId }
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