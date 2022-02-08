import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  height: 80px;
  padding: 0px 40px;
  justify-content: flex-end;
  
  .Dropdown-Content {
    left: -60px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: end;
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