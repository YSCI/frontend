import React, { useEffect } from 'react'
import { history } from 'system/history'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import { tabs } from './StudentProfilePage.config'
import { Layout, Table, TabMenu } from 'components'
import * as S from './StudentProfilePage.styles'
import { Button } from 'ui'
import { withConfirmation } from 'helpers'
// import studentPic from 'images/avatar.jfif'
import { StudentForm } from 'pages/StudentsPage/components/StudentForm'
import { tableColumns } from 'constants/tableColumns'

export const StudentProfilePage = ({
  loaded,
  showModal,
  profileData,
  loadProfile,
  deleteStudent,
  loadProfileCommandsHistory
}) => {
  const { studentId } = useParams()

  useEffect(() => {
    loadProfile(history.location.search+studentId)
  }, [studentId, loadProfile])

  if (!loaded) return null;

  const onEditStudent = () => {
    showModal(StudentForm, { editableData: profileData })
  }

  const onDeleteStudent = () => {
    withConfirmation({ onYes: () => {
      deleteStudent(profileData.id)
      history.push('/studenets')
    }})
  }

  return (
    <Layout>
      <S.StudentProfilePageContainer>
        <S.StudentProfilePageWrapper>
          <S.MainInfoContainer>
            <S.ProfessionType>
              { profileData.profession.abbreviation }
            </S.ProfessionType>
            <S.StudentProfilePic />
            <S.StudentName>
              { profileData.firstname } { profileData.lastname }
            </S.StudentName>
            <S.InfoItemsContainer>
              <S.InfoItem>
                <div>
                  Ծննդյան ամսաթիվ
                </div>
                <div>
                  { moment(profileData.dateOfBirth).format('DD/MM/YYYY') }
                </div>
              </S.InfoItem>
              <S.InfoItem>
                <div>
                  Կուրս
                </div>
                <div>
                  { profileData.currentCourse }
                </div>
              </S.InfoItem>
              <S.InfoItem>
                <div>
                  Խումբ
                </div>
                <div>
                  { profileData.currentGroup }
                </div>
              </S.InfoItem>
            </S.InfoItemsContainer>
            <S.ActionsContainer>
              <Button onClick={onEditStudent}>
                Փոփոխել
              </Button>
              <Button className='danger' onClick={onDeleteStudent}>
                Ջնջել
              </Button>
            </S.ActionsContainer>
          </S.MainInfoContainer>
          <S.AllInfoContainer>
            <TabMenu tabs={tabs}>
              <S.TabContainer>
                <div>Hayk</div>              
              </S.TabContainer>
              <S.TabContainer>
                <Table
                  hasActionsBar={false}
                  hasSelections={false}
                  data={profileData.commandHistory.list}
                  total={profileData.commandHistory.total}
                  loadData={(paging) => loadProfileCommandsHistory({ ...paging, studentId: profileData.id })}
                  columns={tableColumns.commandHistory}
                />
              </S.TabContainer>
              <div>
                qwe
              </div>
            </TabMenu>
          </S.AllInfoContainer>
        </S.StudentProfilePageWrapper>
      </S.StudentProfilePageContainer>
    </Layout>
  )
}
