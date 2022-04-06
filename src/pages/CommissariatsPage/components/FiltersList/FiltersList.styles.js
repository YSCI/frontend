import styled from 'styled-components'

export const FiltersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const List = styled.div`
  display: flex;
  gap: 20px;

  .React-Select {
    flex: 1;
  }

  input {
    flex: 1;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  .Button {
    width: 200px !important;
  }
`
