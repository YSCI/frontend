import styled from 'styled-components'

export const FormLabelItemContainer = styled.div`
  padding: 20px 15px;
  border-radius: 4px;
  margin-top: 4px;
  position: relative;
  border: 2px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 34px);
`

export const Label = styled.div`
  position: absolute;
  // z-index: 1;
  white-space: pre;
  background: #fff;
  font-size: 13px;
  top: -12px;
  left: 10px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: bold;
`