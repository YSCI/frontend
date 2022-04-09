import React from 'react'
import { Button, Input, Select } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'

export const FiltersList = ({ communitiesList, loadCommissariats }) => {
  const search = (values) => {
    loadCommissariats(values)
  }

  return (
      <Formik
        initialValues={initialValues}
        onSubmit={search}
      >
        {
          ({
            values,
            resetForm,
            handleSubmit,
            setValues,
            setFieldValue,
          }) => {
            console.log({ values })
            const selectedCommunity = communitiesList.find(el => el.id === values.communityId)
            return (
              <S.FiltersListContainer>
                <S.List>
                  <Input
                    value={values.name}
                    placeholder='Անվանում'
                    onChange={(val) => setFieldValue('name', val)}
                  />
                  <Input
                    value={values.number}
                    placeholder='Համար'
                    onChange={(val) => setFieldValue('number', val)}
                  />
                  <Select
                    value={selectedCommunity ? {
                      value: selectedCommunity?.id,
                      label: selectedCommunity?.name
                    } : null}
                    options={communitiesList.map(community => ({
                      value: community.id,
                      label: community.name
                    }))}
                    placeholder='Համայնք'
                    onChange={(val) => setFieldValue('communityId', val.value)}
                  />
                </S.List>
                <S.ActionsContainer>
                  <Button className='bordered' onClick={() => {
                    resetForm()
                    search()
                  }}>
                    Մաքրել
                  </Button>
                  <Button onClick={handleSubmit}>
                    Փնտրել
                  </Button>
                </S.ActionsContainer>
              </S.FiltersListContainer>
            )
          }
        }
      </Formik>
  )
}