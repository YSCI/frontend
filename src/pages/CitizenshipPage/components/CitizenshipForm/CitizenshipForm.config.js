import * as Yup from 'yup';

export const initialValues = {
  country: ''
}

export const validationSchema = Yup.object().shape({
  country: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
});