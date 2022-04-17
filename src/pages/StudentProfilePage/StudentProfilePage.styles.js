import styled from 'styled-components'

import { CenteredFlex } from 'ui/styles'

export const StudentProfilePageContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
  // display: grid;
  // grid-gap: 20px;
  // grid-auto-flow: column;
  // grid-template-rows: min-content;
  // grid-template-columns: min-content;
`

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 280px;
  padding: 20px;
  min-height: 500px;
  background: #fff;
  border-radius: 7px;
  gap: 10px;
`

export const AllInfoContainer = styled(CenteredFlex)`
  flex: 1;
  background: #fff;
  border-radius: 7px;
`

export const StudentProfilePic = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-top: 20px;
`

export const StudentName = styled.div`
  color: #000;
  margin-bottom: 10px;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  gap: 7px;

  .danger {
    flex: 1;
  }
  .main {
    flex: 1.5;
  }
`

export const ProfessionType = styled(CenteredFlex)`
  top: 0px;
  right: 0px;
  min-width: 100px;
  padding: 5px 15px;
  position: absolute;
  color: #fff;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  background: ${({ theme }) => theme.colors.green};
`

export const TabContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  .Table {
    border-radius: 0px;
  }
`