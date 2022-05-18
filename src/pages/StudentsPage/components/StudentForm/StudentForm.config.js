import * as Yup from 'yup';

import { validations } from 'constants/validations'

export const initialValues = {
  status: '',
  lastname: '',
  statusId: null,
  groupId: null,
  gender: null,
  firstname: '',
  fathername: '',
  dateOfBirth: null,
  privilegeId: null,
  professionId: null,
  citizenshipId: null,
  nationalityId: null,
  contactNumbers: '',
  healthStatusId: null,
  commissariatId: null,
  passportSeries: '',
  residentAddress: '',
  residentRegionId: null,
  dateOfAcceptance: null,
  socialCardNumber: '',
  residentCommunityId: null,
  registrationAddress: '',
  registrationRegionId: null,
  registrationCommunityId: null,
  acceptanceCommandNumber: '',
}

export const validationSchema = Yup.object().shape(validations.student, ['passportSeries', 'socialCardNumber']);
