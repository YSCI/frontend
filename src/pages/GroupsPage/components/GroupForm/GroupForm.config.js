import * as Yup from 'yup';

export const initialValues = {
  number: '',
  professionId: null,
  subjects: []
}

export const validationSchema = Yup.object().shape({
  number: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  professionId: Yup.number()
    .required('Դաշտը չի կարող դատարկ լինել')
});