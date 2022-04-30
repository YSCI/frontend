import * as Yup from 'yup';

import { validationMessages } from 'constants/validationMessages'

export const initialValues = {
  status: '',
  lastname: '',
  statusId: null,
  firstname: '',
  fathername: '',
  dateOfBirth: null,
  privilegeId: null,
  currentGroup: '',
  professionId: null,
  citizenshipId: null,
  currentCourse: '',
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

export const validationSchema = Yup.object().shape({
  firstname: Yup.string(validationMessages.empty)
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  lastname: Yup.string()
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  fathername: Yup.string()
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  currentCourse: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  currentGroup: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  residentAddress: Yup.string()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  residentRegionId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),  
  residentCommunityId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty), 
  registrationAddress: Yup.string()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  registrationRegionId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  registrationCommunityId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  acceptanceCommandNumber: Yup.string()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  dateOfBirth: Yup.string()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  dateOfAcceptance: Yup.string()
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  commissariatId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  statusId: Yup.string()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  privilegeId: Yup.string()  
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  healthStatusId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  professionId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  nationalityId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  citizenshipId: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  contactNumbers: Yup.number()	
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  socialCardNumber: Yup.string()
    .when('passportSeries', {                                                    
    is: (passportSeries) => !passportSeries || passportSeries.length === 0,
    then: Yup.string()
    .required(validationMessages.empty)
    }),
  passportSeries: Yup.string()
    .when('socialCardNumber', {                                                     
    is: (socialCardNumber) => !socialCardNumber || socialCardNumber.length === 0,
    then: Yup.string()
    .required(validationMessages.empty)
    })
},  ['passportSeries', 'socialCardNumber']);