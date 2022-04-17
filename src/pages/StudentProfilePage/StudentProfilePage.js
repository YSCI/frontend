import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Layout } from 'components'
import * as S from './StudentProfilePage.styles'

export const StudentProfilePage = ({
  profile,
  loadProfile
}) => {
  const { studentId } = useParams()

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