import React, { useCallback, useEffect } from 'react'


import * as S from './Modal.styles'

export const Modal = ({
  hideModal,
  componentInfo
}) => {
  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape')
      hideModal()
  }, [hideModal])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  if (!componentInfo.component) return null

  return (
    <S.ModalContainer
      className='Modal-Container'
      onClick={() => hideModal()}
    >
      <div onClick={e => e.stopPropagation()}>
        <componentInfo.component {...componentInfo.props} hideModal={hideModal} />
      </div>
    </S.ModalContainer>
  )
}