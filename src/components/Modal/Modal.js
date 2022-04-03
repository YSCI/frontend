import React from 'react'


import * as S from './Modal.styles'

export const Modal = ({
  hideModal,
  componentInfo
}) => {
  if (!componentInfo.component) return null

  return (
    <S.ModalContainer className='Modal-Container' onClick={() => hideModal()}>
      <div onClick={e => e.stopPropagation()}>
        <componentInfo.component {...componentInfo.props} hideModal={hideModal} />
      </div>
    </S.ModalContainer>
  )
}