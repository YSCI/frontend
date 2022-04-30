import React, { useEffect } from 'react'
import { Button, Input, Select } from 'ui'
import { Formik } from 'formik'

import { FormLabelItem } from 'components/FormLabelItem'
import * as S from './FiltersList.styles'

import { initialValues } from './FiltersList.config'
import { Filter } from 'components'
import { useSearchParams } from 'hooks/useSearchParams'

export const FiltersList = ({
  state,
  hideModal,
  loadAllData,
  loadCommands,
  loadStudents
}) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  useEffect(() => {
    loadAllData()
    loadCommands()
  }, [loadAllData, loadCommands])

  const search = (values) => {
    loadStudents(values)
    hideModal()
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
            const selectedCommand = state.commands.list.find(el => el.id === +values.commandId)
            const selectedCommissariat = state.commissariats.list.find(el => el.id === +values.commissariatId)
            const selectedCitizenship = state.citizenships.list.find(el => el.id === +values.citizenshipId)
            const selectedHealthStatus = state.healthStatuses.list.find(el => el.id === +values.healthStatusId)
            const selectedNationality = state.nationalities.list.find(el => el.id === +values.nationalityId)
            const selectedProfession = state.professions.list.find(el => el.id === +values.professionId)
            const selectedStatus = state.statuses.list.find(el => el.id === +values.statusId)
            const selectedPrivilege = state.privileges.list.find(el => el.id === values.privilegeId)
            
            const selectedRegistrationRegion = state.regions.list.find(el => el.id === +values.registrationRegionId)
            const selectedRegistrationCommunity = selectedRegistrationRegion?.communities.find(el => el.id === +values.registrationCommunityId)

            const selectedResidentRegion = state.regions.list.find(el => el.id === +values.residentRegionId)
            const selectedResidentCommunity = selectedResidentRegion?.communities.find(el => el.id === +values.residentCommunityId)

            return (
              <S.FiltersListContainer className='FiltersListContainer'>
                <S.List>
                  <Input
                    value={values.firstname}
                    placeholder='Անուն'
                    onChange={(val) => setFieldValue('firstname', val)}
                    onEnter={handleSubmit}
                    autoFocus
                  />
                  <Input
                    value={values.lastname}
                    placeholder='Ազգանուն'
                    onChange={(val) => setFieldValue('lastname', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.fathername}
                    placeholder='Հայրանուն'
                    onChange={(val) => setFieldValue('fathername', val)}
                    onEnter={handleSubmit}
                  />
                  <S.FormItem>
                  <Select
                      value={selectedCommand ? {
                        value: selectedCommand?.id,
                        label: selectedCommand?.name
                      } : null}
                      options={state.commands.list.map(command => ({
                        value: command.id,
                        label: command.name
                      }))}
                      placeholder='Հրաման'
                      onChange={(val) => setFieldValue('commandId', val?.value)}
                    />
                  </S.FormItem>
                  <FormLabelItem label='Գրանցման հասցե'>
                    <Select
                      value={selectedRegistrationRegion ? {
                        value: selectedRegistrationRegion?.id,
                        label: selectedRegistrationRegion?.name
                      } : null}
                      options={state.regions.list.map(region => ({
                        value: region.id,
                        label: region.name
                      }))}
                      placeholder='Մարզ'
                      onChange={(val) => setFieldValue('registrationRegionId', val?.value)}
                    />
                    <Select
                      value={selectedRegistrationCommunity ? {
                        value: selectedRegistrationCommunity?.id,
                        label: selectedRegistrationCommunity?.name
                      } : null}
                      options={selectedRegistrationRegion?.communities.map(community => ({
                        value: community.id,
                        label: community.name
                      }))}
                      placeholder='Համայնք'
                      onChange={(val) => setFieldValue('registrationCommunityId', val?.value)}
                    />
                    <S.FormItem>
                      <Input
                        value={values.registrationAddress}
                        placeholder='Հասցե'
                        onChange={(val) => setFieldValue('registrationAddress', val)}
                      />
                    </S.FormItem>
                  </FormLabelItem>
                  <FormLabelItem label='Բնակության հասցե'>
                    <Select
                      value={selectedResidentRegion ? {
                        value: selectedResidentRegion?.id,
                        label: selectedResidentRegion?.name
                      } : null}
                      options={state.regions.list.map(region => ({
                        value: region.id,
                        label: region.name
                      }))}
                      placeholder='Մարզ'
                      onChange={(val) => setFieldValue('residentRegionId', val?.value)}
                    />
                    <Select
                      value={selectedResidentCommunity ? {
                        value: selectedResidentCommunity?.id,
                        label: selectedResidentCommunity?.name
                      } : null}
                      options={selectedResidentRegion?.communities.map(community => ({
                        value: community.id,
                        label: community.name
                      }))}
                      placeholder='Համայնք'
                      onChange={(val) => setFieldValue('residentCommunityId', val?.value)}
                    />
                    <S.FormItem>
                      <Input
                        value={values.residentAddress}
                        placeholder='Հասցե'
                        onChange={(val) => setFieldValue('residentAddress', val)}
                      />
                    </S.FormItem>
                  </FormLabelItem>
                  <Input
                    value={values.acceptanceCommandNumber}
                    placeholder='Ընդունման հրամանի համար'
                    onChange={(val) => setFieldValue('acceptanceCommandNumber', val)}
                    onEnter={handleSubmit}
                  /> 
                  <Input
                    value={values.currentCourse}
                    placeholder='Ընթացիկ կուրս'
                    onChange={(val) => setFieldValue('currentCourse', val)}
                    onEnter={handleSubmit}
                  /> 
                  <Input
                    value={values.currentGroup}
                    placeholder='Ընթացիկ խումբ'
                    onChange={(val) => setFieldValue('currentGroup', val)}
                    onEnter={handleSubmit}
                  /> 
                  <Select
                    value={selectedCitizenship ? {
                      value: selectedCitizenship?.id,
                      label: selectedCitizenship?.country
                    } : null}
                    options={state.citizenships.list.map(citizenship => ({
                      value: citizenship.id,
                      label: citizenship.country
                    }))}
                    placeholder='Քաղաքացիություն'
                    onChange={(val) => setFieldValue('citizenshipId', val?.value)}
                  />
                  <Select
                    value={selectedNationality ? {
                      value: selectedNationality?.id,
                      label: selectedNationality?.name
                    } : null}
                    options={state.nationalities.list.map(nationality => ({
                      value: nationality.id,
                      label: nationality.name
                    }))}
                    placeholder='Ազգություն'
                    onChange={(val) => setFieldValue('nationalityId', val?.value)}
                  />
                  <Select
                    value={selectedProfession ? {
                      value: selectedProfession?.id,
                      label: selectedProfession?.name
                    } : null}
                    options={state.professions.list.map(profession => ({
                      value: profession.id,
                      label: profession.name
                    }))}
                    placeholder='Մասնագիտություն'
                    onChange={(val) => setFieldValue('professionId', val?.value)}
                  />
                  <Select
                    value={selectedPrivilege ? {
                      value: selectedPrivilege?.id,
                      label: selectedPrivilege?.name
                    } : null}
                    options={state.privileges.list.map(privilege => ({
                      value: privilege.id,
                      label: privilege.name
                    }))}
                    placeholder='Արտոնություն'
                    onChange={(val) => setFieldValue('privilegeId', val?.value)}
                  />
                  <Select
                    value={selectedHealthStatus ? {
                      value: selectedHealthStatus?.id,
                      label: selectedHealthStatus?.status
                    } : null}
                    options={state.healthStatuses.list.map(healthStatus => ({
                      value: healthStatus.id,
                      label: healthStatus.status
                    }))}
                    placeholder='Առողջական վիճակ'
                    onChange={(val) => setFieldValue('healthStatusId', val?.value)}
                  />
                  <Select
                    value={selectedStatus ? {
                      value: selectedStatus?.id,
                      label: selectedStatus?.name
                    } : null}
                    options={state.statuses.list.map(status => ({
                      value: status.id,
                      label: status.name
                    }))}
                    placeholder='Կարգավիճակ'
                    onChange={(val) => setFieldValue('statusId', val?.value)}
                  />
                  <Select
                    value={selectedCommissariat ? {
                      value: selectedCommissariat?.id,
                      label: selectedCommissariat?.name
                    } : null}
                    options={state.commissariats.list.map(commissariat => ({
                      value: commissariat.id,
                      label: commissariat.name
                    }))}
                    placeholder='Զինկոմիսարիատ'
                    onChange={(val) => setFieldValue('commissariatId', val?.value)}
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