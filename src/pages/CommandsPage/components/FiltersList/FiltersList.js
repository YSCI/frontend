import React from 'react'
import { Button, Input, Select } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { Filter } from 'components'
import { useSearchParams } from 'hooks/useSearchParams'

export const FiltersList = ({ loadCommands, statusesList, hideModal }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  const search = (values) => {
    hideModal()
    loadCommands(values)
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
            const selectedStatus = statusesList.find(el => el.id === +values.changeableStatusId)

            return (
              <S.FiltersListContainer>
                <S.List>
                  <Input
                    value={values.name}
                    placeholder='Անվանում'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
                  />
                  <Select
                    value={selectedStatus ? {
                      value: selectedStatus.id,
                      label: selectedStatus.name
                    } : null}
                    options={statusesList.map(status => ({
                      value: status.id,
                      label: status.name
                    }))}
                    placeholder='Փոփոխելի կարգավիճակ'
                    onChange={(val) => setFieldValue('changeableStatusId', val?.value)}
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