import * as Yup from 'yup';

export const initialValues = {
  status: '',
  lastname: '',
  statusId: null,
  firstname: '',
  fathername: '',
  dateOfBirth: null,
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
  firstname: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  lastname: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  fathername: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  currentCourse: Yup.number()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  currentGroup: Yup.number()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  residentAddress: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  residentRegionId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),  
  residentCommunityId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'), 
  registrationAddress: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  registrationRegionId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  registrationCommunityId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  acceptanceCommandNumber: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  dateOfBirth: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  dateOfAcceptance: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  commissariatId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  statusId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  healthStatusId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  professionId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  nationalityId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  citizenshipId: Yup.string()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  contactNumbers: Yup.number()	
    .required('Դաշտը չի կարող դատարկ լինել'),
  socialCardNumber: Yup.string()                                                                        
    .when('passportSeries', {                                                    
    is: (passportSeries) => !passportSeries || passportSeries.length === 0,                      
    then: Yup.string()  
    .required('Դաշտը չի կարող դատարկ լինել')                 
    }),                                                                  
  passportSeries: Yup.string()                                                                       
    .when('socialCardNumber', {                                                     
    is: (socialCardNumber) => !socialCardNumber || socialCardNumber.length === 0,                         
    then: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
    })             

},  ['passportSeries', 'socialCardNumber']);