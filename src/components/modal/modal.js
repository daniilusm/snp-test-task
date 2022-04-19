import React, { useRef, useEffect, useCallback } from 'react';

import { 
  Background, 
  ModalWrapper, 
  ModalContent, 
  CloseModalButton 
} from './style';


export const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },[setShowModal, showModal]);

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },[keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
					      {children}
					      <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}>x</CloseModalButton>
              </ModalContent>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};