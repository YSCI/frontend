import styled from "styled-components"

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  background: #fff;
  border-radius: 7px;
  width: 100%;
  height: min-content;
`

export const FilterContent = styled.div`
  padding: 20px;
  display: ${({ isFiltersOpened }) => isFiltersOpened ? 'block' : 'none'};
`

export const ToggleFilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 20%;

  &.isFiltersOpened {
    img {
      transform: rotate(180deg);
      margin-top: 0px;
    }
  }
`

export const ToggleFilterIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 3px;
`
export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;

  &:hover {
    ${ToggleFilterButton} {
      background: #f6f6f8;
    }
  }
`

export const HeaderTitle = styled.div`
  font-weight: 500;
`

export const Divider = styled.div`
  width: calc(100% - 40px);
  margin: auto;
  height: 2px;
  background: #f6f6f8;
`