import React, { useEffect } from 'react'
import { Button, Input, Select } from 'ui'
import { Formik } from 'formik'

import { Filter } from 'components'
import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { useSearchParams } from 'hooks/useSearchParams'

export const FiltersList = ({ hideModal, loadCommunities, loadRegions, regionsList }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  useEffect(() => {
    loadRegions()
  }, [loadRegions])

  const search = (values) => {
    hideModal()
    loadCommunities(values)
    updateSearchParams(values)
  }

  return (
    <Filter>
      <Formik
        onSubmit={search}
        initialValues={searchParams || initialValues}
      >
        {
          ({
            values,
            resetForm,
            handleSubmit,
            setFieldValue,
          }) => {
            const selectedRegion = regionsList.find(el => el.id === +values.regionId)

            return (
              <S.FiltersListContainer>
                <S.List>
                  <Input
                    value={values.name}
                    placeholder='Համայնք'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
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
                    onChange={(val) => setFieldValue('regionId', val?.value)}
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
    </Filter>
  )
}