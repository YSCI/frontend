import * as Yup from 'yup';

export const initialValues = {
  number: '',
  professionId: null,
  curriculum: [],
  createdYear: ''
}

export const validationSchema = Yup.object().shape({
  number: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  professionId: Yup.number()
    .required('Դաշտը չի կարող դատարկ լինել')
    .typeError('Դաշտը չի կարող դատարկ լինել')
});