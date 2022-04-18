import * as Yup from 'yup';

export const initialValues = {}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  regionId: Yup.number()
    .typeError('Դաշտը չի կարող դատարկ լինել')
    .required('Դաշտը չի կարող դատարկ լինել'),
});