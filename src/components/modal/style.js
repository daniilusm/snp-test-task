import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: 0.75;
    z-index: 900;
`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
`;

export const ModalContent = styled.div`
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -45%);
    padding: 20px;
    background: #fff;
    width: 50%;
	height: 40%;
    border-radius: 10px;
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;