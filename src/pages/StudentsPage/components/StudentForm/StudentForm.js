import React, { useEffect, useMemo } from 'react'

import * as S from './StudentForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './StudentForm.config'
import { FormLabelItem } from 'components/FormLabelItem'

export const StudentForm = ({
  hideModal,
  editStudent,
  createStudent,
  editableStudent,
  state
}) => {
  const formActionType = useMemo(() => editableStudent
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableStudent])

  const onSubmit = (values) => {
    if (editableStudent) {
      editStudent(values)
    } else {
      createStudent(values)
    }
    // hideModal()
  }

  return (
    <S.StudentFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} ուսանող
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
        initialValues={editableStudent || initialValues}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {
            console.log({ values, state })
            const selectedCommissariat = state.commissariats.list.find(el => el.id === values.commissariatId)
            const selectedCitizenship = state.citizenships.list.find(el => el.id === values.citizenshipId)
            const selectedHealthStatus = state.healthStatuses.list.find(el => el.id === values.healthStatusId)
            const selectedNationality = state.nationalities.list.find(el => el.id === values.nationalityId)
            const selectedProfession = state.professions.list.find(el => el.id === values.professionId)
            const selectedStatus = state.statuses.list.find(el => el.id === values.statusId)
            const selectedRegistrationRegion = state.regions.list.find(el => el.id === values.registrationAddressRegionId)
            const selectedRegistrationCommunity = selectedRegistrationRegion?.communities.find(el => el.id === values.registrationAddressCommunityId)

            const selectedResidentRegion = state.regions.list.find(el => el.id === values.residentAddressRegionId)
            const selectedResidentCommunity = selectedResidentRegion?.communities.find(el => el.id === values.residentAddressCommunityId)

            return (
              <S.FormContentContainer>
                <S.FormItemsList>
                  <S.FormRow>
                    <S.FormItem>
                      <Input
                        value={values.firstname}
                        placeholder='Անուն'
                        onChange={(val) => setFieldValue('firstname', val)}
                      />
                      {
                        errors.firstname && touched.firstname &&
                          <S.ErrorMessage>
                            { errors.firstname }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
                      <Input
                        value={values.lastname}
                        placeholder='Ազգանուն'
                        onChange={(val) => setFieldValue('lastname', val)}
                      />
                      {
                        errors.lastname && touched.lastname &&
                          <S.ErrorMessage>
                            { errors.lastname }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
                      <Input
                        value={values.fathername}
                        placeholder='Հայրանուն'
                        onChange={(val) => setFieldValue('fathername', val)}
                      />
                      {
                        errors.fathername && touched.fathername &&
                          <S.ErrorMessage>
                            { errors.fathername }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
                      <Input
                        value={values.currentCourse}
                        placeholder='Ընթացիկ կուրս'
                        onChange={(val) => setFieldValue('currentCourse', val)}
                      />
                      {
                        errors.currentCourse && touched.currentCourse &&
                          <S.ErrorMessage>
                            { errors.currentCourse }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
                      <Input
                        value={values.currentGroup}
                        placeholder='Ընթացիկ խումբ'
                        onChange={(val) => setFieldValue('currentGroup', val)}
                      />
                      {
                        errors.currentGroup && touched.currentGroup &&
                          <S.ErrorMessage>
                            { errors.currentGroup }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
                    <Input
                      value={values.acceptanceCommandNumber}
                      placeholder='Ընդունման հրամանի համար'
                      onChange={(val) => setFieldValue('acceptanceCommandNumber', val)}
                    />
                    {
                      errors.acceptanceCommandNumber && touched.acceptanceCommandNumber &&
                        <S.ErrorMessage>
                          { errors.acceptanceCommandNumber }
                        </S.ErrorMessage>
                    }
                    </S.FormItem>
                    <S.FormItem>
                      <Input
                        value={values.socialCardNumber}
                        placeholder='Սոցիալական քարտ'
                        onChange={(val) => setFieldValue('socialCardNumber', val)}
                      />
                      {
                        errors.socialCardNumber && touched.socialCardNumber &&
                          <S.ErrorMessage>
                            { errors.socialCardNumber }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
                      <Input
                        value={values.passportSeries}
                        placeholder='Անձը հաստատող փաստաթուղթ'
                        onChange={(val) => setFieldValue('passportSeries', val)}
                      />
                      {
                        errors.passportSeries && touched.passportSeries &&
                          <S.ErrorMessage>
                            { errors.passportSeries }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                  </S.FormRow>
                  <S.FormRow>
                    <S.FormItem>
                      <Select
                        value={selectedCommissariat ? {
                          value: selectedCommissariat?.id,
                          label: selectedCommissariat?.name
                        } : null}
                        options={state.commissariats.list.map(commissariat => ({
                          value: commissariat.id,
                          label: commissariat.name
                        }))}
                        placeholder='Կոմիսարիատ'
                        onChange={(val) => setFieldValue('commissariatId', val.value)}
                      />
                      {
                        errors.communityId && touched.communityId &&
                          <S.ErrorMessage>
                            { errors.communityId }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
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
                        onChange={(val) => setFieldValue('statusId', val.value)}
                      />
                      {
                        errors.communityId && touched.communityId &&
                          <S.ErrorMessage>
                            { errors.communityId }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
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
                        onChange={(val) => setFieldValue('healthStatusId', val.value)}
                      />
                      {
                        errors.healthStatusId && touched.healthStatusId &&
                          <S.ErrorMessage>
                            { errors.healthStatusId }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
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
                        onChange={(val) => setFieldValue('professionId', val.value)}
                      />
                      {
                        errors.professionId && touched.professionId &&
                          <S.ErrorMessage>
                            { errors.professionId }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
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
                        onChange={(val) => setFieldValue('nationalityId', val.value)}
                      />
                      {
                        errors.nationalityId && touched.nationalityId &&
                          <S.ErrorMessage>
                            { errors.nationalityId }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
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
                        onChange={(val) => setFieldValue('citizenshipId', val.value)}
                      />
                      {
                        errors.citizenshipId && touched.citizenshipId &&
                          <S.ErrorMessage>
                            { errors.citizenshipId }
                          </S.ErrorMessage>
                      }
                    </S.FormItem>
                    <S.FormItem>
                        <Input
                          value={values.contactNumbers}
                          placeholder='Հեռախոսահամարներ, (անջատել ստորակետերով)'
                          onChange={(val) => setFieldValue('contactNumbers', val)}
                        />
                        {
                          errors.contactNumbers && touched.contactNumbers &&
                            <S.ErrorMessage>
                              { errors.contactNumbers }
                            </S.ErrorMessage>
                        }
                      </S.FormItem>
                  </S.FormRow>
                  <S.FormRow>
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
                        onChange={(val) => setFieldValue('registrationAddressRegionId', val.value)}
                      />
                      {
                        errors.registrationAddressRegionId && touched.registrationAddressRegionId &&
                          <S.ErrorMessage>
                            { errors.regionId }
                          </S.ErrorMessage>
                      }
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
                        onChange={(val) => setFieldValue('registrationAddressCommunityId', val.value)}
                      />
                      {
                        errors.registrationAddressCommunityId && touched.registrationAddressCommunityId &&
                          <S.ErrorMessage>
                            { errors.registrationAddressCommunityId }
                          </S.ErrorMessage>
                      }
                      <S.FormItem>
                        <Input
                          value={values.registrationAddress}
                          placeholder='Հասցե'
                          onChange={(val) => setFieldValue('registrationAddress', val)}
                        />
                        {
                          errors.registrationAddress && touched.registrationAddress &&
                            <S.ErrorMessage>
                              { errors.registrationAddress }
                            </S.ErrorMessage>
                        }
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
                        onChange={(val) => setFieldValue('residentAddressRegionId', val.value)}
                      />
                      {
                        errors.residentAddressRegionId && touched.residentAddressRegionId &&
                          <S.ErrorMessage>
                            { errors.residentAddressRegionId }
                          </S.ErrorMessage>
                      }
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
                        onChange={(val) => setFieldValue('residentAddressCommunityId', val.value)}
                      />
                      {
                        errors.residentAddressCommunityId && touched.residentAddressCommunityId &&
                          <S.ErrorMessage>
                            { errors.residentAddressCommunityId }
                          </S.ErrorMessage>
                      }
                      <S.FormItem>
                        <Input
                          value={values.residentAddress}
                          placeholder='Հասցե'
                          onChange={(val) => setFieldValue('residentAddress', val)}
                        />
                        {
                          errors.residentAddress && touched.residentAddress &&
                            <S.ErrorMessage>
                              { errors.residentAddress }
                            </S.ErrorMessage>
                        }
                      </S.FormItem>
                    </FormLabelItem>
                  </S.FormRow>
                </S.FormItemsList>
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
    </S.StudentFormContainer>
  )
}