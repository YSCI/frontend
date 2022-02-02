import React from 'react'
import { Formik } from 'formik'


import { Input, Button } from 'ui'
import logoPic from 'images/logo.png'
import * as S from './LoginPage.styles'
import { initialValues } from './LoginPage.config'

export const LoginPage = ({
  login
}) => {
  return (
    <S.LoginPageContainer>
      <S.Logo src={logoPic}/>
      <S.PageTitle>Մուտք գործել համակարգ</S.PageTitle>
      <S.LoginForm>
        <Formik
          initialValues={initialValues}
          onSubmit={login}
        >
          {
            ({
              values,
              handleSubmit,
              setFieldValue
            }) => (
              <>
                <Input
                  value={values.email}
                  placeholder='Մուտքանուն'
                  onChange={(val) => setFieldValue('email', val)}
                />
                <Input
                  type='password'
                  placeholder='Գաղտնաբառ'
                  value={values.password}
                  onChange={(val) => setFieldValue('password', val)}
                />
                <Button onClick={handleSubmit}>
                  Մուտք
                </Button>
              </>
            )
          }
        </Formik>
      </S.LoginForm>
    </S.LoginPageContainer>
  )
}