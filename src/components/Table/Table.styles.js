import styled from 'styled-components'

export const TableContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 260px;

  .Table {
    width: calc(100% - 220px);
    border-spacing: 0;
    box-shadow: 0 0px 25px rgb(34 41 47 / 10%);
    border-radius: 10px;
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
      height: 42.4px;
      background: ${({ theme }) => theme.colors.green};
    }

    tbody {
      tr {
        margin-top: 2px;
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
      background: #fff;
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
            border-bottom-right-radius: 10px;
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

export const FixedActionsBar = styled.div`
  padding: 15px;
  position: absolute;
  border-radius: 10px;
  background: #fff;
  right: 0px;
  height: calc(100% - 30px);
  width: 170px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`