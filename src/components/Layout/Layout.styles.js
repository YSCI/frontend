import styled from 'styled-components/macro'

export const LayoutContainer = styled.div`
  display: flex;
  background: #f6f6f8 !important;
  height: 100%;
`

export const LayoutContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  > div {
    .Button {
      width: 300px;
    }
  }
`

export const LayoutHeader = styled.div`
  display: flex;
`

export const SidebarContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`