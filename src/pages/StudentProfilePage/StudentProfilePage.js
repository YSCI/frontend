import { Layout } from 'components'
import React, { useEffect } from 'react'

import * as S from './StudentProfilePage.styles'

export const StudentProfilePage = ({
  profile,
  loadProfile,
  match: {
    params: {
      studentId
    }
  }
}) => {
  useEffect(() => {
    loadProfile(+studentId)
  }, [studentId, loadProfile])

  return (
    <Layout>
      <S.StudentProfilePageContainer>
        Student Profile
      </S.StudentProfilePageContainer>
    </Layout>
  )
}