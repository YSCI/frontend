import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const GroupFormContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  margin-top: -20px;
  padding-bottom: 20px;
  min-width: 1000px;
  flex-direction: column;
  gap: 10px;
  padding-right: 10px;
`

export const FormHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  width: calc(100% - 30px);
  justify-content: space-between;
  border-bottom: 2px solid #f6f6f8;
`

export const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`

export const CloseFormContainer = styled(CenteredFlex)`
  width: 45px;
  height: 45px;
  border-radius: 20%;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f6f6f8;
  }
`

export const CloseFormIcon = styled.img`
  width: 15px;
  heigth: 15px;
  object-fit: cover;
`

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  padding: 10px 15px;
  align-items: center;
  gap: 10px;
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-left: 10px;
  font-weight: 500;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: flex-end;
  gap: 15px;

  .Button {
    width: 150px;
  }
`

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export const YearsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  padding-right: 8px;
  max-height: 400px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #eeeeee; 
    border-radius: 10px;
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.green};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`

export const GroupItem = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  height: 30px;
  border-radius: 10px;
  background: red
`

export const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`

export const SemestersHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const SemestersHeaderContainer = styled.div`
  display: flex;
  width: 250px;
  gap: 40px;
  margin-bottom: 10px;

  div {
    width: 100px;
    text-align: center;
  }
`

export const SemesterContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  padding-bottom: 15px;
  justify-content: space-between;

  &:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }

  > div {
    width: 300px;
    display: flex;

    justify-content: space-around;
  }
`

export const SemesterCheckboxesContainer = styled.div`
  display: flex;
  width: 250px !important;
  gap: 40px;
  justify-content: space-between;
`