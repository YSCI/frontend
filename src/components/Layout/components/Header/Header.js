import React from 'react'


import { Dropdown } from 'ui'
import * as S from './Headers.styles'
import logoPic from 'images/logo.png'
import profilePic from 'images/profile.png'
import { headerItems } from './Header.config'

export const Header = ({
  user,
  logout
}) => {
  return (
    <S.HeaderContainer>
      <S.HomeContainer>
        <S.AppLink to='/home'>
          <S.Logo src={logoPic} />
          <S.SidebarTitle>
            ԵԻՊՔ Ադմին
          </S.SidebarTitle>
        </S.AppLink>
      </S.HomeContainer>
      <S.HeaderItemsList>
        {
          headerItems.map(item => {
            return (
              item.list
                ? <Dropdown className='Header-Items-Dropdown'>
                    <S.DropdownName>
                      { item.text }
                    </S.DropdownName>
                    <S.DropdownItems className='Dropdown-Items'>
                      {
                        item.list.map(subItem => (
                          <S.HeaderItem className='Header-Item' key={subItem.id} to={subItem.path}>
                            { subItem.text }
                          </S.HeaderItem>
                        ))
                      }
                    </S.DropdownItems>
                  </Dropdown>
                : <S.HeaderItem key={item.id} to={item.path}>
                    { item.text }
                  </S.HeaderItem>
            )
          })
        }
      </S.HeaderItemsList>
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