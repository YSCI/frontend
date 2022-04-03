import * as Yup from 'yup';

export const initialValues = {
  name: '',
  code: '',
  abbreviation: '',
  yearsCount: '',
  number: ''
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  code: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  abbreviation: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  yearsCount: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  number: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
});