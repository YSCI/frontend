import React from 'react'
import { Button, Input, Select } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'

export const FiltersList = ({ loadCommunities, regionsList }) => {
  const search = (values) => {
    loadCommunities(values)
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
            setFieldValue,
          }) => {
            const selectedRegion = regionsList.find(el => el.id === values.regionId)

            return (
              <S.FiltersListContainer>
                <S.List>
                  <Input
                    value={values.name}
                    placeholder='Կարգավիճակ'
                    onChange={(val) => setFieldValue('name', val)}
                  />
                  <Select
                    value={selectedRegion ? {
                      value: selectedRegion.id,
                      label: selectedRegion.name
                    } : null}
                    options={regionsList.map(region => ({
                      value: region.id,
                      label: region.name
                    }))}
                    placeholder='Մարզ'
                    onChange={(val) => setFieldValue('regionId', val.value)}
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