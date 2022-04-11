import styled from 'styled-components/macro'

export const LayoutContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.mainBackground} !important;
  height: 100%;

  ::-webkit-scrollbar {
    height: 10px;
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

export const LayoutContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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

  &.appLoading {
    filter: blur(2.5px);
  }
`