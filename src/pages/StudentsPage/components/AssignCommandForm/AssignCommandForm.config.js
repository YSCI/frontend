import * as Yup from 'yup';

export const initialValues = {
  commandId: null,
  commandNumber: ''
}

export const validationSchema = Yup.object().shape({
  commandNumber: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  commandId: Yup.number()
    .typeError('Դաշտը չի կարող դատարկ լինել')
    .required('Դաշտը չի կարող դատարկ լինել'),
});