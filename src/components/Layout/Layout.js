import React from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import * as S from './Layout.styles'

export const Layout = ({
  loggedIn,
  children
}) => {
  return (
    <S.LayoutContainer>
      <S.SidebarContainer>
        <Sidebar />
      </S.SidebarContainer>
      <S.ContentContainer>
        <S.LayoutHeader>
          <Header />
        </S.LayoutHeader>
        <S.LayoutContent>
          { children }
        </S.LayoutContent>
      </S.ContentContainer>
    </S.LayoutContainer>
  )
}