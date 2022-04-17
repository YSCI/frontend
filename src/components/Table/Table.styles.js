import styled from 'styled-components'

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 260px;
  width: 100%;
  height: min-content;
  box-shadow: 0 0px 25px rgb(34 41 47 / 10%);

  .Table {
    display: block;
    padding-bottom: 52px;
    background: #fff;
    width: calc(100% - ${({ hasActionsBar }) => hasActionsBar ? 248 : 0}px);
    border-spacing: 0;
    // box-shadow: 0 0px 25px rgb(34 41 47 / 10%);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background: #fff;
    min-height: 385px;
    height: mifn-content;
    position: relative;

    overflow: auto;
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
    
    thead {
      th {
        min-height: 66px;
      }

      tr {
        border-top-left-radius: 10px;
        width: 100% !important;
        border-bottom: 2px solid #f6f6f8;
        background: ${({ theme }) => theme.colors.white};
      }
    }

    .header-style {
      position: absolute;
      top: 0px;
      width: 100%;
      left: 0px;
      height: 66px;
      background: ${({ theme }) => theme.colors.white};
    }

    tbody {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 400px;

      tr {
        min-width: 100%;
        margin-top: 2px;
        cursor: pointer;
        border-bottom: 1px solid #f6f6f8;
        background: ${({ theme }) => theme.colors.mainBackground};
        

        td {
          min-height: 64px;
          background: ${({ theme }) => theme.colors.mainBackground};

          &:first-child {
            border-top-left-radius: 5px;
          }
        }

        &.selected {
          background: ${({ theme }) => theme.colors.greenHover};

          td {
            background: ${({ theme }) => theme.colors.greenHover};
          }
        }
        
        &:hover {
          background: ${({ theme }) => theme.colors.greenHover};

          td {
            background: ${({ theme }) => theme.colors.greenHover};
          }
        }
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      display: flex !important;
      justify-content: center;
      align-items: center;
      text-align: center;
      user-select: none;
      border-right: 3px solid #f6f6f8;
      padding: 0.65rem;
    }

    th {
      display: flex !important;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.black};
      font-weight: 500;
      border-right: 3px solid #f6f6f8;

      &:first-child {
        border-top-left-radius: 10px;
      }
    }

    tr {
      &:first-child {
        margin: 0px;
      }

      &:last-child {
        td {
          &:first-child {
            border-bottom-left-radius: 10px;
          }
        }
      }
    }

    .resizer {
      display: inline-block;
      width: 10px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(50%);
      z-index: 1;
      touch-action:none;

      &.isResizing {
        // background: red;
      }
    }
  }
`

export const FixedActionsBarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border-top-right-radius: 10px;
  border-bottom: 2px solid #f6f6f8;
`

export const FixedActionsBar = styled.div`
  position: absolute;
  border-left: 3px solid #f6f6f8;
  border-radius: 10px;
  background: #fff;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px; // only when pagination exists
  right: 0px;
  width: 250px;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`

export const ActionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  // margin-top: 20px;
  padding: 20px 10px;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 68px;
  // width: calc(100% - 248px);
  border-top: 2px solid #f6f6f8;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const PaginationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: calc(100% - 254px - 40px);
  padding: 0px 20px;
  border-right: 3px solid #f6f6f8;
  justify-content: space-between;
  gap: 20px;

  .Button {
    width: 41px !important;
    padding: 0px;
    height: 36px;
    font-weight: 500;

    &.bordered {
      height: 36px;
    }

    &:first-child {
      width: 60px !important;
    }

    &:last-child {
      width: 60px !important;
    }
  }
`

export const TotalCount = styled.div`
  font-weight: 500;
`

export const PaginationActionsContainer = styled.div`
  display: flex;
  gap: 10px;
`