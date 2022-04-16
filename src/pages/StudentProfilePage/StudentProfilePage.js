import { Layout } from 'components'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { history } from 'system/history'

import * as S from './StudentProfilePage.styles'

export const StudentProfilePage = ({
  profile,
  loadProfile,
}) => {
  const { studentId } = useParams()
  useEffect(() => {
    loadProfile(history.location.search+studentId)
  }, [studentId, loadProfile])

  return (
    <Layout>
      <S.StudentProfilePageContainer>
        Student Profile
      </S.StudentProfilePageContainer>
    </Layout>
  )
}