import React from 'react'

import * as S from './Headers.styles'
import profilePic from 'images/profile.png'
import { Dropdown } from 'ui'

export const Header = ({
  user,
  logout
}) => {
  return (
    <S.HeaderContainer>
      <Dropdown>
        <S.UserContainer>
          <S.UserInfo>
            <S.Name>
              { user.name }
            </S.Name>
            <S.Role>
              { user.role }
            </S.Role>
          </S.UserInfo>
          <S.UserPic src={profilePic}/>
        </S.UserContainer>
        <S.DropdownItems>
          <S.Item>
            Կարգավորումներ
          </S.Item>
          <S.Item onClick={logout}>
            Ելք
          </S.Item>
        </S.DropdownItems>
      </Dropdown>
    </S.HeaderContainer>
  )
}