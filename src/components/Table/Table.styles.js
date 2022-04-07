import styled from 'styled-components'

export const TableContainer = styled.div`
  width: min-content;
  overflow-x: auto;
  display: flex;
  position: relative;
  min-height: 260px;

  .Table {
    max-width: ${() => ((document.getElementsByClassName('Table-Container'))[0]?.parentElement.clientWidth || 840) - 40 - 170 - 60 }px;
    border-spacing: 0;
    box-shadow: 0 0px 25px rgb(34 41 47 / 10%);
    border-radius: 10px;
    max-width: 964px;
    overflow: auto;
    background: #fff;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      background: #fff;
      user-select: none;
      margin: 0;
      padding: 0.65rem;
      margin-right: 1px;
      // border-bottom: 2px solid black;
      // border-right: 2px solid black;

      :last-child {
        border-right: 0;
      }
    }

    th {
      display: flex !important;
      justify-content: center;
      align-items: center;
      background: rgba(8,115,112,0.50);
      color: #fff;
      border-right: 1px solid #fff;

      &:first-child {
        border-top-left-radius: 10px;
      }

      &:last-child {
        border-top-right-radius: 10px;
      }
    }

    tr {
      margin-top: 2px;

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
  position: fixed;
  border-radius: 10px;
  background: #fff;
  right: 30px;
  height: 230px;
  width: 170px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`