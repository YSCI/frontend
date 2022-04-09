import styled from 'styled-components'

export const TableContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 260px;
  width: calc(100% - 430px);

  .Table {
    width: calc(100% - 200px);
    border-spacing: 0;
    box-shadow: 0 0px 25px rgb(34 41 47 / 10%);
    border-radius: 10px;
    border-top-right-radius: 0px;
    overflow: auto;
    background: #fff;
    position: relative;

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
        width: calc(100% + 4px) !important;
        background: ${({ theme }) => theme.colors.green};
      }
    }

    .header-style {
      position: absolute;
      top: 0px;
      width: 100%;
      left: 0px;
      height: 66px;
      background: ${({ theme }) => theme.colors.green};
    }

    tbody {
      tr {
        margin-top: 2px;
        cursor: pointer;
        border-bottom: 1px solid #f6f6f8;

        &.selected {
          background: #e1eeee;
        }
        
        &:hover {
          background: #e1eeee;
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
      text-align: center;
      user-select: none;
      border-right: 2px solid #f6f6f8;
      padding: 0.65rem;
      // border-bottom: 2px solid black;
      // border-right: 2px solid black;
    }

    th {
      display: flex !important;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.colors.green};
      color: #fff;
      border-right: 2px solid #fff;

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

          &:last-child {
            // border-bottom-right-radius: 10px;
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
  font-weight: bold;
  color: #fff;
  background: ${({ theme }) => theme.colors.green};
  border-top-right-radius: 10px;
  border-bottom: 2px solid #f6f6f8;
`

export const FixedActionsBar = styled.div`
  position: absolute;
  border-left: 2px solid #f6f6f8;
  border-radius: 10px;
  background: #fff;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  right: 0px;
  height: 100%;
  width: 200px;
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