import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 60px);
  background: #fff;
  height: 80px;
  padding: 0px 30px;
  justify-content: space-between;
  
  .Dropdown-Content {
    left: -60px;
  }

  .Header-Items-Dropdown {
    top: 65px;
  }

  .Dropdown-Items {
    text-align: center;

    .Header-Item {
      padding: 5px 20px;
    }
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: end;
  cursor: pointer;
  padding-left: 40px;
`

export const DropdownName = styled.div`
  cursor: pointer;
`

export const Name = styled.div`
  
`

export const Role = styled.div`
  font-size: 12px;
  color: #6e6b7b;
`

export const UserInfo = styled.div`
  display: flex;
  gap: 3px;
  flex-direction: column;
`

export const UserPic = styled.img`
  width: 50px;
  height: 50px;
`

export const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 10px 0px;
`

export const Item = styled.div`
  cursor: pointer;
  padding: 5px 15px;

  &:hover {
    background: rgba(8, 115, 112, 0.12);
  }
`

export const HeaderItemsList = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

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
  overflow-x: none;
`

export const HeaderItem = styled(Link)`
  color: #000;
  white-space: pre;
  padding: 5px 10px;
`

export const HomeContainer = styled.div`
  display: flex;
  padding-right: 40px;
`

export const Logo = styled.img`
  width: 65px;
  height: 65px;
`

export const SidebarTitle = styled.div`
  margin-left: 20px;
  font-weight: 600;
  font-size: 20px;
  color: #000;
  white-space: pre;
`
export const AppLink = styled(Link)`
  display: flex;
  align-items: center;
`